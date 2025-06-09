import Container from "../shared/Container";
const numberData = [
  { number: "100+", text: "AI Models Implemented" },
  { number: "250+", text: " Enterprise Clients" },
  { number: "99.9%", text: " Uptime Guarantee" },
  { number: "10+", text: "Years of Innovation" },
];
const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center items-center">
        <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
          {numberData.map((item) => (
            <div key={item.number} className="text-center px-5 ">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1 ">
                {item.number}
              </h2>
              <p className="mt-2 text-heading-3">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
