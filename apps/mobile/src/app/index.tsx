// Okul Aklı - Root Index
// Uygulama açıldığında login ekranına yönlendirir
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

/**
 * Root index - uygulama başlatıldığında otomatik olarak login sayfasına yönlendirir.
 * Kullanıcı daha önce giriş yapmışsa ilgili rol paneline yönlendirilebilir.
 * Şu an için basit redirect implementasyonu.
 */
export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Uygulama açıldığında login sayfasına yönlendir
    router.replace('/login');
  }, [router]);

  // Yönlendirme gerçekleşene kadar boş ekran göster
  return null;
}
