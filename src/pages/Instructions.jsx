export default function Instructions() {
  const steps = [
    "Conecte a bomba à fonte de água e à energia (preferencialmente solar para eficiência máxima).",
    "Instale os sensores nos pontos indicados para monitorar o nível da água.",
    "Configure o aplicativo para controlar horários e volume na irrigação e bebedouros.",
    "Ative o sistema e monitore remotamente via app para ajustes finos.",
    "Realize manutenções periódicas na filtragem para garantir qualidade da água.",
  ];

  return (
    <section className="bg-[rgba(129,199,132,0.5)] px-6 py-12">
      <div className="w-full gap-14 grid">
        
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
          Guia de Utilização
        </h1>

        
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg shadow-md p-6 mb-12">
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        
        <div className="bg-blue-900 text-white rounded-lg shadow-md h-64 flex items-center justify-center">
          Vídeo de Demonstração
        </div>
      </div>
    </section>
  );
}
