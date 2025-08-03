import React, { createContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext();
const MainLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //Google Sign In
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  //Sign up with email and password
  const handleSignUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then((result) =>
      console.log(result.user)
    );
  };

  //sign in with email and password
  const handleSignIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((result) =>
      console.log(result.user)
    );
  };

  //logout
  const handleLogout = () => {
    setLoading(true);
    signOut(auth).then((res) => console.log(res));
  };

  //On auth state logics
  useEffect(() => {
    console.log("user state: ", user);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/auth.user
      //   const uid = user.uid;
      //   // ...
      // } else {
      //   // User is signed out
      //   // ...
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    handleGoogleSignIn,
    handleSignIn,
    handleSignUp,
    handleLogout,
    user,
    setUser,
    loading,
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content grows to fill available space */}
      <authContext.Provider value={authData}>
        <header>
          <Header></Header>
        </header>
        <main className="flex-grow px-4 md:px-10 py-6 bg-white">
          <Outlet />
        </main>
      </authContext.Provider>

      {/* Footer sticks to bottom if content is short */}
      <footer>
        <Footer />
      </footer>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
