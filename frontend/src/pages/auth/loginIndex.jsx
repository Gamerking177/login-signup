import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CimageLogo from '@/components/CimageLogo';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';

const LoginIndex = () => {
  const [activeTab, setActiveTab] = useState("login");
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex w-full bg-gradient-to-br from-white to-slate-100"
    >
      {/* Branding Panel (hidden on mobile) */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        initial="hidden"
        animate="show"
        className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center bg-[#0056A8] px-8 py-12 overflow-hidden"
      >
        <motion.div variants={staggerContainer(0.1, 0.2)}>
          <Card className="w-full max-w-md p-8 bg-transparent border-none shadow-none">
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
              <CimageLogo className="mx-auto mb-8" />
              <h1 className="text-4xl font-bold text-white mb-6">
                Welcome to CIMAGE
              </h1>
              <p className="text-blue-100 text-lg mb-8">
                Your secure login portal for accessing CIMAGE services and management tools.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer(0.1, 0.2)} className="space-y-4">
              <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
                <Card className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-none hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-white font-semibold text-xl mb-3">Secure Access</h3>
                  <p className="text-blue-100">Enterprise-grade security for your data</p>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn('up', 'tween', 0.4, 1)}>
                <Card className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-none hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-white font-semibold text-xl mb-3">Easy Management</h3>
                  <p className="text-blue-100">Intuitive tools for your business needs</p>
                </Card>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Auth Card */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex flex-1 lg:w-1/2 justify-center items-center px-4 py-10 lg:py-0"
      >
        <Card className="w-full max-w-md mx-auto p-8">
          {/* Mobile Logo */}
          <motion.div 
            variants={fadeIn('down', 'tween', 0.2, 1)}
            className="lg:hidden flex justify-center mb-8"
          >
            <CimageLogo />
          </motion.div>
          
          <motion.h1 
            variants={fadeIn('down', 'tween', 0.3, 1)}
            className="text-2xl font-bold text-center mb-8 text-[#0056A8]"
          >
            {activeTab === "login" ? "Login to Your Account" : "Create New Account"}
          </motion.h1>
          
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div variants={fadeIn('down', 'tween', 0.4, 1)}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="login">
                  <Login />
                  <p className="text-center text-sm mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <button 
                      className="text-[#0056A8] hover:underline font-medium"
                      onClick={() => setActiveTab("register")}
                    >
                      Sign up now
                    </button>
                  </p>
                </TabsContent>
                
                <TabsContent value="register">
                  <Signup />
                  <p className="text-center text-sm mt-6 text-gray-600">
                    Already have an account?{" "}
                    <button 
                      className="text-[#0056A8] hover:underline font-medium"
                      onClick={() => setActiveTab("login")}
                    >
                      Login here
                    </button>
                  </p>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default LoginIndex;