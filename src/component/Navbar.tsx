"use client";
import * as React from 'react'; 
import { useState, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const [avatarUrl, setAvatarUrl] = useState("/static/images/default-avatar.jpg");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  // Fetch the avatar from the custom route
  useEffect(() => {
    if (session && session?.user?.email) {
      fetch(`/api/get_avatar`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched avatar data:", data);
          if (data.user.avatar_url) {
            setAvatarUrl(data.user.avatar_url);
          }
        })
        .catch((error) => {
          console.error("Error fetching avatar:", error);
        });
    }
  }, [session]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className="bg-black navbar items-center text-white p-4">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/">
          <div className="logo flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={64} height={64} />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow flex justify-center ml-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            className="w-full px-3 py-2 rounded-md text-black"
          />
          <Link href={`/search?query=${encodeURIComponent(searchQuery)}`} legacyBehavior>
            <button className="ml-2 bg-green-500 text-white rounded px-3 py-2">
              Search
            </button>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu flex-shrink-0 flex items-center space-x-4 ml-4">
          <Link href="/" legacyBehavior>
            <a className="menu-item">Home</a>
          </Link>
          {session && (
            <Link href="/Dashboard" legacyBehavior>
              <a className="menu-item">Dashboard</a>
            </Link>
          )}
          {!session ? (
            <>
              <Link href="/login" legacyBehavior>
                <a className="menu-item">Login</a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className="menu-item">Signup</a>
              </Link>
            </>
          ) : null}
        </div>

        {/* Avatar Section */}
        {session && (
          <div className="flex-shrink-0 flex items-center space-x-4 ml-auto">
            <Tooltip title="Open Profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src={avatarUrl}
                  onError={(e) => {
                    console.error("Avatar image failed to load:", e);
                    (e.currentTarget as HTMLImageElement).src = "/static/images/default-avatar.jpg";

                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href="/Dashboard">
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href="/Dashboard">
                  <Typography textAlign="center">Dashboard</Typography>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  signOut();
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button flex-shrink-0">
          <button
            aria-label="Toggle Menu"
            className="p-2 text-gray-700 rounded-md focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <Image src="/close.svg" width={30} height={30} alt="Close Menu" />
            ) : (
              <Image src="/hamburger-menu.svg" width={30} height={30} alt="Open Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${navbarOpen ? "open" : ""}`}>
        <Link href="/" legacyBehavior>
          <a className="block py-2">Home</a>
        </Link>
        {session && (
          <Link href="/Dashboard" legacyBehavior>
            <a className="block py-2">Dashboard</a>
          </Link>
        )}
        {!session ? (
          <>
            <Link href="/login" legacyBehavior>
              <a className="block py-2">Login</a>
            </Link>
            <Link href="/register" legacyBehavior>
              <a className="block py-2">Signup</a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/Dashboard" legacyBehavior>
              <a className="block py-2">Profile</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a
                className="block py-2"
                onClick={() => {
                  signOut();
                  setNavbarOpen(false);
                }}
              >
                Logout
              </a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
