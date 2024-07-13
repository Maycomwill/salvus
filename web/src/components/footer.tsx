function Footer() {
  return (
    <footer className="flex-1/2 flex h-[100px] max-h-[100px] w-full items-center justify-center gap-4 bg-slate-50">
      <img
        loading="lazy"
        src="/logo.svg"
        alt="Salvus logo"
        className="size-20"
      />
      <p className="text-sm">
        Desenvolvido por:{" "}
        <a
          className="underline-offset-2 hover:underline"
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
