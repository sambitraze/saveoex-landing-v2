export const metadata = {
  title: "Refund Policy | Saveoex",
};

const ErrorPage = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
      <div className="container mx-auto">
        <div className="mx-8 flex flex-wrap items-center">
          <p className="text-xl font-bold">Last updated: August 22, 2024</p>

          <p>
            All sales are final. We do not offer refunds for any products or
            services purchased, including but not limited to digital downloads,
            subscriptions, and any other items or services offered on our
            platform.
          </p>

          <p>
            By making a purchase with us, you agree that you will not be
            entitled to a refund, exchange, or return under any circumstances.
          </p>

          <h2>Exceptions</h2>
          <p>
            In rare cases, we may consider a refund under exceptional
            circumstances where it is required by law. Such cases will be
            evaluated on a case-by-case basis, and the decision to grant a
            refund will be at our sole discretion.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Refund Policy, please contact
            us:
          </p>
          <ul>
            <li>By email: saveoex@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
