📱 XiaomiChain — Gestión de Tienda Xiaomi en Solana

XiaomiChain es un programa on-chain desarrollado en Rust con Anchor sobre la blockchain de Solana. Permite a los dueños de tiendas gestionar su inventario de celulares Xiaomi de forma descentralizada, transparente e inmutable.

📌 ¿Qué hace el proyecto?

XiaomiChain implementa un sistema CRUD completo para administrar una tienda de celulares Xiaomi:

Crear una tienda vinculada a la wallet del propietario

Registrar celulares Xiaomi en el inventario

Eliminar celulares del inventario

Activar o desactivar la disponibilidad de un celular

Actualizar el stock de unidades disponibles

Cada tienda y cada celular son cuentas derivadas (PDA) únicas en Solana, lo que garantiza que:

No puede haber registros duplicados

Solo el propietario autorizado puede modificar su inventario

🏗️ Arquitectura
Owner (Wallet)
    │
    └── Tienda Xiaomi (PDA)
            │
            ├── Celular Xiaomi 13 (PDA)
            ├── Celular Redmi Note 13 (PDA)
            └── Celular Poco X6 (PDA)

El propietario controla su tienda y gestiona los celulares registrados en ella.

📦 Estructuras principales
Tienda
Campo	Tipo	Descripción
owner	Pubkey	Wallet del dueño de la tienda
nombre	String	Nombre de la tienda
celulares	Vec<Pubkey>	Lista de celulares registrados
Celular
Campo	Tipo	Descripción
tienda	String	Nombre de la tienda
modelo	String	Modelo del celular Xiaomi
precio	u64	Precio del celular
stock	u16	Cantidad disponible en inventario
disponible	bool	Estado del celular en venta
⚙️ Instrucciones (Funciones del programa)
Instrucción	Descripción
crear_tienda(nombre)	Crea la cuenta de la tienda vinculada al propietario
registrar_celular(modelo, precio, stock)	Registra un nuevo celular Xiaomi en el inventario
eliminar_celular(modelo)	Elimina un celular del inventario
alternar_disponibilidad(modelo)	Activa o desactiva la venta del celular
actualizar_stock(modelo, stock)	Actualiza la cantidad disponible del celular
🔐 PDA (Direcciones derivadas del programa)

Las cuentas se derivan con las siguientes semillas:

Tienda

["tienda", nombre_tienda, owner_pubkey]

Celular

["celular", modelo_celular, owner_pubkey]

Esto garantiza que:

Cada propietario tiene su propia tienda única.

No pueden existir dos celulares con el mismo modelo registrados por el mismo propietario.

Solo el dueño puede administrar su inventario.

🚀 Cómo usar el proyecto (Solana Playground)

Abrir Solana Playground

Crear o hacer fork del proyecto

Conectar la wallet en Devnet

Compilar y desplegar el programa

Usar las instrucciones para interactuar con el sistema.

Ejemplo de flujo de uso

crear_tienda("XiaomiStore")

registrar_celular("Xiaomi 13", 12000, 10)

alternar_disponibilidad("Xiaomi 13") → desactiva venta

actualizar_stock("Xiaomi 13", 20) → actualiza inventario

eliminar_celular("Xiaomi 13") → elimina del inventario

🛠️ Tecnologías

Solana — Blockchain de alta velocidad

Anchor Framework — Framework para programas en Solana

Rust — Lenguaje del programa

Solana Playground — Entorno para compilar y desplegar

👤 Autor

Proyecto desarrollado como ejemplo de gestión descentralizada de inventario para una tienda Xiaomi en Solana.
