@@ .. @@
 import { useState, useEffect } from 'react';
 import { OrderItem, Order } from '../types';
+import { calculateOrderSubtotal, calculateOrderTotal } from '../services/orderService';

 /**
  * Hook personalizado para gestionar el estado del pedido actual
  */
 export function useOrder() {
   const [order, setOrder] = useState<Order>({
     items: [],
+    subtotal: 0,
     total: 0,
-    status: 'pending'
+    status: 'pending',
+    createdAt: new Date().toISOString(),
+    updatedAt: new Date().toISOString()
   });