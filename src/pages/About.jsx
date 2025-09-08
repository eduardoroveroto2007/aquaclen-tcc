export default function About() {
  const team = [
    { name: "Christian Robert", age: 17, linkedin: "https://www.linkedin.com/in/christhian-robert07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: "../src/components/pics/chris.jpeg" },
    { name: "Isaque Ricardo",  age: 17, linkedin: "https://www.linkedin.com/in/isaque-ricardo-093301338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: "../src/components/pics/isaque.jpeg" },
    { name: "Eduardo Roverto", age: 17, linkedin: "https://www.linkedin.com/in/eduardo-roveroto-ab4b75335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: "../src/components/pics/eduardo.jpeg" },
    { name: "Pietro Martins",  age: 17, linkedin: "https://www.linkedin.com/in/pietro-martins-ab84a02a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: "../src/components/pics/pi.jpeg" },
    { name: "Leonardo Brunholi", age: 17, linkedin: "https://www.linkedin.com/in/leonardo-brunholi-071b79335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: "../src/components/pics/leo.jpeg" },
  ];

  return (
    <section className="mx-[10%] bg-[rgba(129,199,132,0.5)] min-h-[calc(100vh-5rem)] px-6 py-12">
      <div className="w-full gap-14 ">
        
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 text-center">
          Quem Somos
        </h1>

        
        <p className="text-base md:text-lg text-gray-700 mb-10 text-center leading-relaxed">
          Somos uma startup formada por jovens apaixonados por tecnologia e sustentabilidade.
          Nosso objetivo é transformar o campo por meio de soluções inteligentes que respeitam
          o meio ambiente e aumentam a produtividade do agricultor.
        </p>

        
        <div className="grid grid-cols-5 gap-6">
          {team.map((member, i) => (
            <article
              key={i}
              className="grid bg-white border border-emerald-100 rounded-xl shadow-sm p-2 flex items-center gap-5"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-emerald-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">Idade: {member.age}</p>
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-800 transition"
                aria-label={`LinkedIn de ${member.name}`}
                title="LinkedIn"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.3 108 0 83.7 0 53.64A53.64 53.64 0 0 1 53.84 0c29.58 0 53.44 24 53.44 53.64 0 30.06-23.86 54.36-53.44 54.36zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.34-79.3-48.4 0-55.8 37.8-55.8 76.8V448h-92.7V148.9h88.98v40.8h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111.1 61.8 111.1 142.3V448z"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
