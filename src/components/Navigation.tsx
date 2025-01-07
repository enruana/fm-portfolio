import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Felipe Mantilla</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Home
            </Link>
            <Link to="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Projects
            </Link>
            <Link to="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 