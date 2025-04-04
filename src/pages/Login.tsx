
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3,
  Mail, 
  Lock, 
  ArrowRight, 
  LogIn,
  AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, automatically redirect to dashboard
    // In a real app, you would validate credentials against a backend
    if (email && password) {
      window.location.href = '/dashboard';
    } else {
      setError('Please enter both email and password.');
    }
  };
  
  const handleDemoLogin = () => {
    // Redirect directly to dashboard for demo mode
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex flex-col bg-invenstory-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-invenstory-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-invenstory-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Header */}
      <header className="w-full py-6 px-4 z-10">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center">
            <BarChart3 className="h-8 w-8 text-invenstory-primary mr-2" />
            <span className="text-2xl font-bold text-white">Invenstory</span>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 z-10">
        <div className="w-full max-w-md">
          <Card className="bg-invenstory-dark-accent border-white/5 shadow-neumorph">
            <CardHeader className="space-y-2 pb-4">
              <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 w-full bg-invenstory-dark mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    {error && (
                      <div className="bg-red-900/20 border border-red-700 text-red-200 px-4 py-2 rounded-md flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        {error}
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          type="email" 
                          placeholder="Email" 
                          className="pl-10 bg-invenstory-dark border-white/10 focus:border-invenstory-primary"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          type="password" 
                          placeholder="Password" 
                          className="pl-10 bg-invenstory-dark border-white/10 focus:border-invenstory-primary"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} 
                        />
                      </div>
                      <div className="flex justify-end">
                        <a href="#" className="text-sm text-invenstory-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-invenstory-primary hover:bg-invenstory-primary/90">
                      <LogIn className="mr-2 h-5 w-5" />
                      Sign In
                    </Button>
                    
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/10"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-invenstory-dark-accent px-2 text-gray-400">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" type="button" className="border-white/10">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" type="button" className="border-white/10">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                        </svg>
                        Apple
                      </Button>
                    </div>
                  </CardContent>
                </form>
                
                <CardFooter className="pt-0">
                  <Button 
                    onClick={handleDemoLogin}
                    variant="ghost" 
                    className="w-full text-invenstory-secondary hover:text-invenstory-secondary/90 hover:bg-invenstory-secondary/10"
                  >
                    Try Demo Mode
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </TabsContent>
              
              <TabsContent value="register">
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input type="email" placeholder="Email" className="pl-10 bg-invenstory-dark border-white/10 focus:border-invenstory-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input type="password" placeholder="Password" className="pl-10 bg-invenstory-dark border-white/10 focus:border-invenstory-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input type="password" placeholder="Confirm Password" className="pl-10 bg-invenstory-dark border-white/10 focus:border-invenstory-primary" />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-invenstory-primary hover:bg-invenstory-primary/90">
                    Create Account
                  </Button>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    onClick={handleDemoLogin}
                    variant="ghost" 
                    className="w-full text-invenstory-secondary hover:text-invenstory-secondary/90 hover:bg-invenstory-secondary/10"
                  >
                    Try Demo Mode
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </TabsContent>
            </Tabs>
          </Card>
          
          <p className="text-center mt-6 text-gray-400 text-sm">
            By continuing, you agree to Invenstory's
            <a href="#" className="text-invenstory-primary hover:underline mx-1">Terms of Service</a>
            and
            <a href="#" className="text-invenstory-primary hover:underline mx-1">Privacy Policy</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
