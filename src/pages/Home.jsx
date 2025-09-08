export default function Home() {
  return (
    <section className="mx-[10%] bg-[rgba(129,199,132,0.5)] min-h-[calc(100vh-5rem)] flex flex-col items-center px-6 py-12">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Aquaclean Inteligente
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            O Aquaclean Inteligente é uma inovação no setor agrícola. Nossa bomba
            automatizada detecta o nível da água, aciona o sistema automaticamente
            e filtra a água antes de enviá-la para irrigação ou bebedouros. Tudo
            isso com possibilidade de integração com energia solar e controle via
            aplicativo.
          </p>
          <a
            href="#download"
            className=" decoration-white-900 inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            BAIXAR APLICATIVO
          </a>
        </div>

        {/* Imagem do produto */}
        <div className="bg-gray-200 rounded-lg h-100 flex items-center justify-center text-gray-500">
          IMAGEM DO PRODUTO
        </div>
      </div>
    </section>
  );
}
