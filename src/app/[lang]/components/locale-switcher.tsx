"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { i18n } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="p-4">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          locale={locale}
          className="px-2"
        >
          {locale.toUpperCase()}
        </Link>
      ))}
      {/* <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
}
