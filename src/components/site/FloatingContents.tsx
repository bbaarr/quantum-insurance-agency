"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteRoutes } from "@/lib/site-content";

interface FloatingContentsProps {
  sections: { id: string; label: string }[];
}

export default function FloatingContents({ sections }: FloatingContentsProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger render={<Button className="contents-trigger" variant="outline" />}>
        <Menu aria-hidden="true" size={20} strokeWidth={1.7} />
        <span className="sr-only">תפריט</span>
      </SheetTrigger>
      <SheetContent className="contents-panel" closeLabel="סגירת התפריט" dir="rtl" side="right">
        <SheetHeader className="contents-header">
          <SheetTitle className="contents-title">תפריט</SheetTitle>
          <SheetDescription className="contents-description">
            מעבר בין תחומי השירות, פרטי הקשר והנושאים שבעמוד.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="כל עמודי האתר" className="contents-navigation">
          <p className="contents-label">עמודים</p>
          {siteRoutes.map((route) => (
            <SheetClose key={route.href} render={
              <Link
                aria-current={pathname === route.href ? "page" : undefined}
                className={`contents-link${pathname === route.href ? " is-current" : ""}`}
                href={route.href}
              />
            }>
              <span>{route.label}</span>
              {pathname === route.href ? <span className="current-indicator">כאן</span> : null}
            </SheetClose>
          ))}
        </nav>

        {sections.length > 0 ? (
          <nav aria-label="נושאים בעמוד הנוכחי" className="contents-navigation contents-section-navigation">
            <p className="contents-label">בעמוד הזה</p>
            {sections.map((section) => (
              <SheetClose key={section.id} render={
                <Link className="contents-link section-link" href={`${pathname}#${section.id}`} />
              }>
                {section.label}
              </SheetClose>
            ))}
          </nav>
        ) : null}

        <div className="contents-panel-footer">
          <Link className="button button-light" href="/contact">לתיאום פגישה</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
