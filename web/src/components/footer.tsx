function Footer() {
  return (
    <footer className="fixed bottom-0 flex items-center gap-4">
      <img
        loading="lazy"
        src="/logo.svg"
        alt="Salvus logo"
        className="size-20"
      />
      <p className="text-sm">
        Desenvolvido por:{" "}
        <a
          className="hover:underline underline-offset-2"
          href="https://maycomwill.vercel.app/"
          rel="noopener"
          target="_blank"
        >
          Maycom Willams
        </a>
      </p>
    </footer>
  );
}

export default Footer;
