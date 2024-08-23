"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
  IconButton,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { styled, useTheme } from "@mui/material/styles";
import axios from "axios";
import UploadImage from "@/component/UploadImage";

const drawerWidth = 240;
const drawerVisibleWidth = 72;
const navbarHeight = 240;

const openedMixin = (theme:Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme:Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: drawerVisibleWidth,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Dashboard = () => {
  const theme = useTheme();
  const { data: session, status } = useSession();
  const router = useRouter();

  const [aboutMe, setAboutMe] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [resumeUrl, setResumeUrl] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Default to false
  const [avatarUrl, setAvatarUrl] = useState("/static/images/default-avatar.jpg");
  const [isUploading, setIsUploading] = useState(false);
  const [open, setOpen] = useState(true);

  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get("/api/get_userdata");
      const { aboutMe, linkedin, github, resume_url, avatar_url } = response.data;
      setAboutMe(aboutMe || "");
      setLinkedin(linkedin || "");
      setGithub(github || "");
      setResumeUrl(resume_url || null);
      setAvatarUrl(avatar_url || "/static/images/default-avatar.jpg");
      setIsEditing(false); // Default to false if data is available
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    } else {
      fetchUserData();
    }
  }, [status, router, fetchUserData]);

  const handleSaveChanges = useCallback(async () => {
    const data = { aboutMe, linkedin, github };

    try {
      const response = await axios.post("/api/save_userdata", data);
      console.log("Profile saved:", response.data);
      setIsEditing(false);
      fetchUserData(); // Re-fetch data after saving
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  }, [aboutMe, linkedin, github, fetchUserData]);

  const handleImageUpload = async (file:File) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload_avatar', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setAvatarUrl(result.user.avatar_url);
      } else {
        console.error('Upload failed:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSignOut = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/");
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, route: "/" },
    { text: "Profile", icon: <AccountCircleIcon />, route: "/Dashboard/profile" },
    { text: "Sign Out", icon: <ExitToAppIcon />, action: handleSignOut },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#1E293B",
        minHeight: "100vh",
        color: "white",
      }}
    >
  <MuiDrawer
  variant="permanent"
  anchor="left"
  open={open}
  sx={{
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    width: open ? drawerWidth : drawerVisibleWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      width: open ? drawerWidth : drawerVisibleWidth,
      backgroundColor: "black",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  }}
>



        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                if (item.route) {
                  router.push(item.route);
                } else if (item.action) {
                  item.action();
                }
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </MuiDrawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? `${drawerWidth}px` : `${drawerVisibleWidth}px`,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginTop: `${navbarHeight}px`, // Ensure this matches the height of your navbar
        }}
      >
        {/* Profile Section */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            alt="User Avatar"
            src={avatarUrl}
            sx={{ width: 56, height: 56, mr: 2, cursor: "pointer" }}
            onClick={() => document.getElementById("file-upload")?.click()}
          />
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => e.target.files && handleImageUpload(e.target.files[0])}
          />
          <Typography variant="h6">{session?.user?.name}</Typography>
        </Box>
      
           <UploadImage/>
        <Box component="form" sx={{ mb: 2 }}>
          {isEditing ? (
            <>
              <TextField
                label="About Me"
                fullWidth
                multiline
                rows={4}
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                variant="outlined"
                sx={{
                  backgroundColor: "#334155",
                  color: "white",
                  mb: 2,
                }}
              />
              <TextField
                label="LinkedIn"
                fullWidth
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                variant="outlined"
                sx={{
                  backgroundColor: "#334155",
                  color: "white",
                  mb: 2,
                }}
              />
              <TextField
                label="GitHub"
                fullWidth
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                variant="outlined"
                sx={{
                  backgroundColor: "#334155",
                  color: "white",
                  mb: 2,
                }}
              />
              <Button
                variant="contained"
                color="success"
                onClick={handleSaveChanges}
                sx={{ mt: 2 }}
              >
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1">About me: {aboutMe}</Typography>
              <Typography variant="body1">LinkedIn: {linkedin}</Typography>
              <Typography variant="body1">GitHub: {github}</Typography>
              <Button
                variant="contained"
                color="success"
                onClick={() => setIsEditing(true)}
                sx={{ mt: 2 }}
              >
                Edit Profile
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
