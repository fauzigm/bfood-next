'use client';

import { useContext, useState } from 'react';
import { CartContext } from '@/components/ProductGrid';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/Container';

interface OrderForm {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

interface FormErrors extends Partial<OrderForm> {
  [key: `quantity_${number}`]: string | undefined;
}

export default function CheckoutPage() {
  const { cart, addToCart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState<OrderForm>({ name: '', phone: '', address: '', notes: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0) {
      addToCart({ ...cart[index], quantity: num - cart[index].quantity });
    }
  };

  const handleIncrement = (index: number) => {
    addToCart({ ...cart[index], quantity: 1 });
  };

  const handleDecrement = (index: number) => {
    if (cart[index].quantity > 1) {
      addToCart({ ...cart[index], quantity: -1 });
    }
  };

  const getTotalCartItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalCartValue = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Nama diperlukan';
    if (!form.phone.trim()) newErrors.phone = 'Nomor telepon diperlukan';
    else if (!/^\+?\d{10,13}$/.test(form.phone)) newErrors.phone = 'Nomor telepon tidak valid';
    if (!form.address.trim()) newErrors.address = 'Alamat pengiriman diperlukan';
    cart.forEach((item, index) => {
      if (item.quantity < item.minOrder) {
        newErrors[`quantity_${index}`] = `Minimal ${item.minOrder} ${item.priceUnit} untuk ${item.name}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert('Harap perbaiki kesalahan pada formulir atau jumlah pesanan.');
      return;
    }
    const orderSummary = `
      Pesanan Anda:
      ${cart.map(item => `- ${item.name}: ${item.quantity} ${item.priceUnit} (${formatPrice(item.price * item.quantity)})`).join('\n')}
      Total: ${formatPrice(getTotalCartValue())}
      Nama: ${form.name}
      Telepon: ${form.phone}
      Alamat: ${form.address}
      Catatan: ${form.notes || 'Tidak ada'}
    `;
    alert(`Pesanan berhasil ditempatkan!\n${orderSummary}`);
    clearCart();
    setForm({ name: '', phone: '', address: '', notes: '' });
  };

  return (
    <Container className="py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400" />
          <h3 className="text-lg font-medium text-gray-600 mt-4">Keranjang Anda kosong</h3>
          <p className="text-gray-500">Kembali ke menu untuk menambahkan item</p>
          <Link href="/">
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
              Kembali ke Menu
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Cart Items (Editable Quantities) */}
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.packageId}-${item.menuItemName}`}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow border"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    {formatPrice(item.price)} / {item.priceUnit} (Min: {item.minOrder})
                  </p>
                  {errors[`quantity_${index}`] && (
                    <p className="text-sm text-red-600">{errors[`quantity_${index}`]}</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                      className="w-16 text-center font-medium text-lg border border-gray-300 rounded-md py-1 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                    <button
                      onClick={() => handleIncrement(index)}
                      className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <p className="font-bold text-orange-600">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white rounded-lg p-6 shadow-lg border text-right">
            <p className="text-gray-600">
              Total: <span className="font-bold text-orange-600">{getTotalCartItems()} item(s)</span>
            </p>
            <p className="text-lg font-bold text-orange-600">{formatPrice(getTotalCartValue())}</p>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg border">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Detail Pemesanan</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Masukkan nama Anda"
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Masukkan nomor telepon"
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Alamat Pengiriman</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Masukkan alamat pengiriman"
                  rows={4}
                />
                {errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Catatan (Opsional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Masukkan catatan tambahan"
                  rows={3}
                />
              </div>
              <div className="flex justify-between items-center">
                <Link href="/cart">
                  <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                    Kembali ke Keranjang
                  </button>
                </Link>
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Buat Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}