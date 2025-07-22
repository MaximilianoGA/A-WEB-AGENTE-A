@@ .. @@
 // Pedido completo
 export interface Order {
 }
-  id: string;
+  id?: string;
   items: OrderItem[];
+  subtotal: number;
+  tax?: number;
   total: number;
   status?: OrderStatus;
   createdAt?: string;
   updatedAt?: string;