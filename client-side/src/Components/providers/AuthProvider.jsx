
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const login = (email, password) => {
    if (email === "test@example.com" && password === "123456") {
      setUser({ email: "test@example.com", name: "Guest User" });
    } else {
      alert("Invalid credentials");
    }
  };


  const logout = () => {
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;



















// /* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";

// import app from "../../firebase/firebase.config.js";
// import useAxiosPublic from "../hooks/useAxiosPublic.jsx";

// export const AuthContext = createContext(null);

// // const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const updateUserProfile = (name, photo) => {
//     setLoading(true);
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     }).then(() => {
//       setLoading(false);
//       setUser({
//         ...auth.currentUser,
//         displayName: name,
//         photoURL: photo,
//       });
//     });
//   };

//   const axiosPublic = useAxiosPublic();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//         const userInfo = { email: currentUser.email };
//         axiosPublic.post("/jwt", userInfo).then((res) => {
//           if (res.data.token) {
//             localStorage.setItem("access-token", res.data.token);
//             setLoading(false);
//           }
//         });
//       } else {
//         localStorage.removeItem("access-token");
//         setLoading(false);
//       }
//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, [axiosPublic]);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//     updateUserProfile,
//     googleSignIn,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;


//*************** */


