
export default function Home() {
  return (
    <main className="">
      <section ref={middleRef} className="middle">
        <div className="mask h2">
          <h2>sophen</h2>
        </div>

        <div className="card card1" ref={card1}>
          <div className="mask">
            <h3>
              advanced
              <br />
              interactions
            </h3>
          </div>
          <div className="mask">
            <p>Equipped with the latest tech to create the fanciest interactions.</p>
          </div>
          <div className="box"></div>
        </div>
        <div className="card card2" ref={card2}>
          <div className="mask">
            <h3>
              extended
              <br />
              easing
            </h3>
          </div>
          <div className="mask">
            <p>Utilize our expert flow protocol to extend easing capabilities.</p>
          </div>
          <div className="box"></div>
        </div>
      </section>
    </main>
  );
}
