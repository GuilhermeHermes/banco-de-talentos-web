import Link from "next/link";
import "./navbar.css"; // Importa o arquivo CSS com os estilos

export default function Navbar() {
  return (
    <div className="menu">
      <nav>
        <Link href="/admin/colaborador">Colaborador</Link>
        <Link href="/admin/projeto">Projeto</Link>
        <Link href="/admin/relatorio">Relatórios</Link>
        <Link href="/admin/painel">Painel</Link>
      </nav>
    </div>
  );
}
