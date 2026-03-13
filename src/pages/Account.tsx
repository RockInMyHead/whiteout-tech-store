import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Footer from "@/components/store/Footer";
import { User, Package, LogOut } from "lucide-react";

const Account = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
      return;
    }
    if (user) {
      supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setDisplayName(data.display_name || "");
            setPhone(data.phone || "");
            setAddress(data.address || "");
          }
        });
    }
  }, [user, authLoading, navigate]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName, phone, address })
      .eq("user_id", user.id);
    setSaving(false);
    if (error) {
      toast.error("Ошибка сохранения");
    } else {
      toast.success("Профиль обновлён");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Загрузка...</div>
      </main>
    );
  }

  const tabs = [
    { id: "profile", label: "Профиль", icon: User },
    { id: "orders", label: "Заказы", icon: Package },
  ];

  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-8">Личный кабинет</h1>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-24">
          <nav className="flex md:flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-left mt-4"
            >
              <LogOut className="w-4 h-4" />
              Выйти
            </button>
          </nav>

          <div className="max-w-lg">
            {activeTab === "profile" && (
              <div className="space-y-6 fade-in">
                <div>
                  <h2 className="font-display text-xl font-semibold mb-1">Профиль</h2>
                  <p className="text-sm text-muted-foreground">Управление вашими данными</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Имя</label>
                    <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <Input value={user?.email || ""} disabled className="h-11 bg-secondary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7..." className="h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Адрес доставки</label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Город, улица, дом" className="h-11" />
                  </div>
                  <Button onClick={handleSave} disabled={saving} className="h-11 px-8 text-sm font-medium">
                    {saving ? "Сохранение..." : "Сохранить"}
                  </Button>
                </div>
              </div>
            )}
            {activeTab === "orders" && (
              <div className="fade-in">
                <div className="mb-6">
                  <h2 className="font-display text-xl font-semibold mb-1">Заказы</h2>
                  <p className="text-sm text-muted-foreground">История ваших заказов</p>
                </div>
                <div className="text-center py-16 text-muted-foreground">
                  <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">У вас пока нет заказов</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Account;
