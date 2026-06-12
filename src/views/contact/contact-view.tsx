"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge, Mail, MapPin, Phone, Store, Truck } from "lucide-react";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";
import type { Language } from "@/types/i18n";

type ContactContent = {
  title: string;
  body: string;
  headquarters: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  address: string;
  phone: string;
  email: string;
  departments: { title: string; email: string; type: "logistics" | "retail" | "hr" }[];
  formTitle: string;
  fields: {
    firstName: string;
    lastName: string;
    businessEmail: string;
    company: string;
    department: string;
    message: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
    businessEmail: string;
    company: string;
    department: string;
    message: string;
  };
  submit: string;
  footerBody: string;
  footerCopyright: string;
  footerDivisions: string;
  footerSubsidiaries: string;
  footerLegal: string;
};

const contactContent: Record<Language, ContactContent> = {
  en: {
    title: "Contact Us",
    body:
      "Connect with our global team. Whether you require complex logistics solutions, retail partnerships, or have general inquiries, our dedicated departments are ready to assist you.",
    headquarters: "Headquarters",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    address: "123 Global Commerce Blvd,\nSuite 4500\nIstanbul, Turkey",
    phone: "+90 212 555 0199",
    email: "contact@altinyildizgroup.com",
    departments: [
      { title: "Logistics", email: "logistics@altinyildiz.com", type: "logistics" },
      { title: "Retail", email: "retail@altinyildiz.com", type: "retail" },
      { title: "Human Resources", email: "hr@altinyildiz.com", type: "hr" },
    ],
    formTitle: "Business Inquiries",
    fields: { firstName: "First Name", lastName: "Last Name", businessEmail: "Business Email", company: "Company Name", department: "Department Inquiry", message: "Message" },
    placeholders: { firstName: "Jane", lastName: "Doe", businessEmail: "jane@company.com", company: "Acme Corp", department: "Select a department...", message: "How can we help you?" },
    submit: "Send Message",
    footerBody: "Building the future of global trade, logistics, and retail with unwavering commitment to excellence.",
    footerCopyright: "© 2024 LOGO International. All rights reserved.",
    footerDivisions: "Divisions",
    footerSubsidiaries: "Subsidiaries",
    footerLegal: "Legal",
  },
  tr: {
    title: "İletişim",
    body:
      "Küresel ekibimizle iletişime geçin. Lojistik çözümler, perakende ortaklıkları veya genel talepler için ilgili ekiplerimiz yardımcı olmaya hazır.",
    headquarters: "Merkez",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
    address: "123 Global Commerce Blvd,\nSuite 4500\nİstanbul, Türkiye",
    phone: "+90 212 555 0199",
    email: "contact@altinyildizgroup.com",
    departments: [
      { title: "Lojistik", email: "logistics@altinyildiz.com", type: "logistics" },
      { title: "Perakende", email: "retail@altinyildiz.com", type: "retail" },
      { title: "İnsan Kaynakları", email: "hr@altinyildiz.com", type: "hr" },
    ],
    formTitle: "İş Talepleri",
    fields: { firstName: "Ad", lastName: "Soyad", businessEmail: "İş E-postası", company: "Şirket Adı", department: "Departman", message: "Mesaj" },
    placeholders: { firstName: "Jane", lastName: "Doe", businessEmail: "jane@company.com", company: "Acme Corp", department: "Departman seçin...", message: "Size nasıl yardımcı olabiliriz?" },
    submit: "Mesaj Gönder",
    footerBody: "Küresel ticaret, lojistik ve perakendenin geleceğini mükemmellik odağıyla inşa ediyoruz.",
    footerCopyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
    footerDivisions: "Birimler",
    footerSubsidiaries: "Bağlı Şirketler",
    footerLegal: "Yasal",
  },
  bg: {
    title: "Контакт",
    body:
      "Свържете се с нашия глобален екип. За логистични решения, ритейл партньорства или общи запитвания нашите отдели са готови да съдействат.",
    headquarters: "Централа",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    emailLabel: "Имейл",
    address: "123 Global Commerce Blvd,\nSuite 4500\nИстанбул, Турция",
    phone: "+90 212 555 0199",
    email: "contact@altinyildizgroup.com",
    departments: [
      { title: "Логистика", email: "logistics@altinyildiz.com", type: "logistics" },
      { title: "Ритейл", email: "retail@altinyildiz.com", type: "retail" },
      { title: "Човешки ресурси", email: "hr@altinyildiz.com", type: "hr" },
    ],
    formTitle: "Бизнес запитвания",
    fields: { firstName: "Име", lastName: "Фамилия", businessEmail: "Бизнес имейл", company: "Компания", department: "Отдел", message: "Съобщение" },
    placeholders: { firstName: "Jane", lastName: "Doe", businessEmail: "jane@company.com", company: "Acme Corp", department: "Изберете отдел...", message: "Как можем да помогнем?" },
    submit: "Изпрати",
    footerBody: "Изграждаме бъдещето на глобалната търговия, логистика и ритейл с ангажимент към качество.",
    footerCopyright: "© 2024 LOGO International. Всички права запазени.",
    footerDivisions: "Дивизии",
    footerSubsidiaries: "Дъщерни дружества",
    footerLegal: "Правни",
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-12 pt-36 md:px-16 md:py-[120px] md:pt-[180px]">
        <div className="mb-16 max-w-3xl md:mb-24">
          <h1 className="mb-6 font-display text-[40px] font-bold leading-[48px] tracking-[-0.01em] text-[#000613] md:text-[64px] md:leading-[72px]">{content.title}</h1>
          <p className="text-lg leading-7 text-muted">{content.body}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-outline/30 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#cda729]" />
              <h2 className="mb-8 font-display text-2xl font-semibold leading-8 text-[#000613]">{content.headquarters}</h2>
              <ul className="space-y-6">
                <ContactInfo icon="address" label={content.addressLabel} value={content.address} />
                <ContactInfo icon="phone" label={content.phoneLabel} value={content.phone} />
                <ContactInfo icon="email" label={content.emailLabel} value={content.email} />
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.departments.map((department) => (
                <DepartmentCard key={department.type} department={department} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="relative h-64 overflow-hidden rounded-xl border border-outline/30 bg-[#e2e2e2] md:h-80">
              <Image src={pageImages.contactMap} alt={content.headquarters} fill quality={100} className="object-cover" />
              <div className="absolute inset-0 bg-[#000613]/5" />
            </div>
            <form className="rounded-xl border border-outline/30 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h2 className="mb-8 font-display text-2xl font-semibold leading-8 text-[#000613]">{content.formTitle}</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label={content.fields.firstName} placeholder={content.placeholders.firstName} />
                <Field label={content.fields.lastName} placeholder={content.placeholders.lastName} />
                <Field label={content.fields.businessEmail} placeholder={content.placeholders.businessEmail} type="email" />
                <Field label={content.fields.company} placeholder={content.placeholders.company} />
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="font-display text-sm font-semibold tracking-[0.05em] text-muted">{content.fields.department}</span>
                  <select className="rounded-lg border border-outline/60 bg-white px-4 py-3 text-base text-[#000613] outline-none focus:border-[#000613]">
                    <option>{content.placeholders.department}</option>
                    {content.departments.map((department) => <option key={department.type}>{department.title}</option>)}
                  </select>
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="font-display text-sm font-semibold tracking-[0.05em] text-muted">{content.fields.message}</span>
                  <textarea className="min-h-36 resize-none rounded-lg border border-outline/60 bg-white px-4 py-3 text-base text-[#000613] outline-none focus:border-[#000613]" placeholder={content.placeholders.message} />
                </label>
              </div>
              <div className="flex justify-end pt-8">
                <button className="rounded-lg bg-[#000613] px-8 py-4 font-display text-base font-semibold tracking-[0.05em] text-white transition-all hover:brightness-110" type="submit">{content.submit}</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <ContactFooter content={content} />
    </>
  );
}

function ContactInfo({ icon, label, value }: { icon: "address" | "phone" | "email"; label: string; value: string }) {
  const Icon = icon === "address" ? MapPin : icon === "phone" ? Phone : Mail;
  return (
    <li className="flex items-start gap-4">
      <Icon className="mt-1 h-5 w-5 text-[#cda729]" />
      <div>
        <span className="mb-1 block font-display text-sm font-semibold tracking-[0.05em] text-muted">{label}</span>
        <span className="whitespace-pre-line text-base leading-6 text-[#000613]">{value}</span>
      </div>
    </li>
  );
}

function DepartmentCard({ department }: { department: ContactContent["departments"][number] }) {
  const Icon = department.type === "logistics" ? Truck : department.type === "retail" ? Store : Badge;
  return (
    <article className={`rounded-lg border border-outline/30 bg-[#f3f3f4] p-6 transition-colors hover:border-[#000613] ${department.type === "hr" ? "sm:col-span-2" : ""}`}>
      <Icon className="mb-4 h-6 w-6 text-muted" />
      <h3 className="mb-2 font-display text-base font-semibold tracking-[0.05em] text-[#000613]">{department.title}</h3>
      <p className="text-sm leading-5 text-muted">{department.email}</p>
    </article>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-display text-sm font-semibold tracking-[0.05em] text-muted">{label}</span>
      <input className="rounded-lg border border-outline/60 bg-white px-4 py-3 text-base text-[#000613] outline-none focus:border-[#000613]" placeholder={placeholder} type={type} />
    </label>
  );
}

function ContactFooter({ content }: { content: ContactContent }) {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto grid grid-cols-1 gap-8 bg-[#000613] px-5 py-[120px] text-white sm:grid-cols-2 lg:grid-cols-12 md:px-16">
      <div className="flex flex-col justify-between lg:col-span-4">
        <div>
          <div className="mb-6 font-display text-[32px] font-bold leading-[40px]">LOGO</div>
          <p className="mb-8 max-w-xs text-sm leading-5 text-white/70">{content.footerBody}</p>
        </div>
        <div className="text-sm leading-5 text-white/50">{content.footerCopyright}</div>
      </div>
      <FooterGroup title={content.footerDivisions} links={t.footer.groups[0]?.links ?? []} />
      <FooterGroup title={content.footerSubsidiaries} links={[...(t.footer.groups[1]?.links ?? []), ...(t.footer.groups[2]?.links ?? [])]} />
      <FooterGroup title={content.footerLegal} links={t.footer.groups.at(-1)?.links ?? []} />
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h3 className="mb-4 font-display text-sm font-bold text-[#ffe089]">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={`${link.href}-${link.label}-${index}`}>
            <Link className="text-sm leading-5 text-white/70 hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
