const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ramim Hasan Naim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
