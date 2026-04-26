// Okul Aklı - Root Index
// Uygulama açıldığında login ekranına yönlendirir
import { Redirect } from 'expo-router';

/**
 * Root index - uygulama başlatıldığında otomatik olarak login sayfasına yönlendirir.
 * Kullanıcı daha önce giriş yapmışsa ilgili rol paneline yönlendirilebilir.
 * Şu an için basit redirect implementasyonu.
 */
export default function Index() {
  return <Redirect href="/login" />;
}
