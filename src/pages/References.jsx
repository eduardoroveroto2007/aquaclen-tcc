export default function References() {
  return (
    <section className="bg-[rgba(129,199,132,0.5)] min-h-[calc(100vh-5rem)] flex flex-col items-center px-6 py-12">
      <div className="max-w-5xl w-full">
        
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 text-center">
          Pixel Pastures
        </h1>

        
        <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
          Bem-vindo ao Pixel Pastures, onde o charme rústico e os pixels retrô se unem à agricultura futurista! 
          Gerencie suas terras, aprimore seus equipamentos com a mais recente tecnologia agrícola e cultive 
          plantinhas com a ajuda de robôs, drones e dispositivos inteligentes. É a sua fazendinha aconchegante — 
          com um toque de inovação!
        </p>

        
        <div className="bg-gray-300 text-gray-700 rounded-lg shadow-md h-64 flex items-center justify-center mb-8">
          Vídeo demonstrativo será inserido aqui
        </div>

       
        <div className="text-center">
          <a
            href="#jogo"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            JOGUE AGORA
          </a>
        </div>
      </div>
      <br/>
      <div className="max-w-5xl w-full">
        
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
          Referências
        </h1>

        
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg shadow-md p-6 mb-12">
          <p className="text-lg text-gray-700 mb-4">
            Aqui estão alguns links úteis para aprofundar seu conhecimento:
          </p>
          <ul className="list-disc list-inside space-y-2 text-emerald-700">
            <li>
              <a href="#" className="hover:underline">
                Link 1 - Documento técnico
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Link 2 - Artigo científico
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Link 3 - Vídeo explicativo
              </a>
            </li>
          </ul>
        </div>

        
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Fontes adicionais
          </h2>
          <p className="text-gray-700 mb-4">
            Explore também estas fontes complementares para expandir seu entendimento sobre
            tecnologias agrícolas e sustentabilidade:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Relatório anual de inovação agrícola
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guia prático de irrigação inteligente
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Estudo de caso: uso de energia solar no campo
              </a>
            </li>
          </ul>
        </div>

        
        <div className="bg-emerald-600 text-white rounded-lg shadow-md p-6 h-64 flex items-center justify-center">
          <p className="text-lg font-semibold">
            Espaço reservado para conteúdo futuro ou banners
          </p>
        </div>
      </div>
    </section>

  );
}
