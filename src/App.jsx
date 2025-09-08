import { Outlet, Link } from "react-router-dom";
import logoProjeto from "../src/components/pics/logoProjeto.png";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <header className="bg-emerald-600 fixed top-0 left-0 w-full shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img
              src={logoProjeto}
              alt="Logo Aquaclean"
              className="h-8 w-auto"
            />
            <span className="text-white font-bold text-lg">AQUACLEAN</span>
          </Link>

         
          <ul className="flex gap-6 font-medium">
            <li>
              <Link to="/instructions" className="text-white hover:text-emerald-200">
                Instruções
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-emerald-200">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/references" className="text-white hover:text-emerald-200">
                Referências
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      
      <main className="flex flex-col items-center justify-center pt-20 w-full mx-auto bg-FFF8E2">
        <Outlet />
      </main>

     
      <footer className="bg-emerald-700 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Aquaclean Inteligente — Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
