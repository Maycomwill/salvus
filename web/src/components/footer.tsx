function Footer() {
  return (
    <footer className="flex-1/2 bg-slate-50 w-full justify-center flex items-center gap-4 max-h-[100px] h-[100px]">
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
