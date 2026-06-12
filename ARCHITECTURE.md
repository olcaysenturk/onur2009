# Frontend Architecture

Bu proje şu aşamada backend içermez. Next.js API route handler, local JSON DB, `services` API katmanı ve backend simülasyonu eklenmeyecek. Bu katmanlar gerçek backend ihtiyacı netleştiğinde ayrıca tasarlanacak.

## Ana Prensipler

- `src/app`: App Router route dosyaları, layout, metadata, `robots`, `sitemap` ve `manifest` dosyalarını içerir.
- `src/app/**/page.tsx`: İnce kalır; ilgili ekranı `src/views` altından çağırır ve sayfa metadata sorumluluğunu taşır.
- `src/views`: Sayfa seviyesindeki ekran kompozisyonlarını içerir.
- `src/components/ui`: Tekrar kullanılabilir, dumb UI bileşenleri için kullanılır.
- `src/components/layout`: Header, footer ve ortak layout parçalarını içerir.
- `src/components/sections`: Ana sayfa gibi pazarlama/sunum bölümlerine ait parçaları içerir.
- `src/components/pages`: Division sayfaları gibi mevcut domain şablonlarını ve sayfa parçalarını içerir.
- `src/store`: Redux Toolkit store ve global UI state için kullanılır.
- `src/hooks`: Custom React hook'larını içerir.
- `src/lib`: Asset registry, constants, i18n, SEO ve utility fonksiyonlarını içerir.
- `src/types`: Global TypeScript tiplerini içerir.

## Backend Hariç Tutulanlar

- `src/app/api` route handler dosyaları
- `src/data` local JSON persistent veri dosyaları
- `src/services` fetch tabanlı API servisleri
- `fs/promises` tabanlı local DB helper'ları
- CRUD için `createAsyncThunk` tabanlı remote data akışı

## State Yönetimi

- Dil gibi global UI state Redux store içinde tutulur.
- Modal, filtre, aktif sekme ve küçük sayfa içi state'ler component içinde `useState` ile tutulur.
- Backend olmadığı sürece listeleme ve CRUD state'i için async thunk eklenmez.

## i18n

- Mevcut yapı `src/lib/i18n.ts` üzerinden çalışır.
- Aktif dil Redux state ve `useLanguage` hook'u ile yönetilir.
- Yeni metinler önce mevcut i18n yapısına eklenmelidir.

## SEO

- Ortak SEO ayarları `src/lib/seo.ts` içindedir.
- `NEXT_PUBLIC_APP_TITLE`, `NEXT_PUBLIC_APP_URL` ve `NEXT_PUBLIC_APP_DESCRIPTION` env değerleri desteklenir.
- `src/app/manifest.ts`, `src/app/robots.ts` ve `src/app/sitemap.ts` App Router metadata route dosyalarıdır.

## Yeni Sayfa Ekleme Akışı

1. `src/views/{page}/{page}-view.tsx` altında ekranı oluştur.
2. `src/app/{route}/page.tsx` içinde sadece view import et.
3. Aynı route dosyasında `metadata` ekle.
4. Ortak parçaları `components/ui`, domain parçalarını mevcut domain klasörlerinde tut.
5. Backend veya API gerektiren kod ekleme; ihtiyaç oluşursa önce mimariyi güncelle.
