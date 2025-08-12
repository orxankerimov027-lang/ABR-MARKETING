export default function Home() {
  return <h1>Главная страница</h1>;
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ===== Справочники

model Brand {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  logoUrl     String?
  description String?
  isActive    Boolean  @default(true)
  products    Product[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Category {
  id        String      @id @default(cuid())
  name      String
  slug      String      @unique
  parentId  String?
  parent    Category?   @relation("CategoryToCategory", fields: [parentId], references: [id])
  children  Category[]  @relation("CategoryToCategory")
  products  Product[]
}

// ===== Каталог / товары

model Product {
  id            String           @id @default(cuid())
  titleAZ       String
  titleRU       String
  titleEN       String
  slug          String           @unique
  brandId       String
  brand         Brand            @relation(fields: [brandId], references: [id])
  categoryId    String?
  category      Category?        @relation(fields: [categoryId], references: [id])
  descriptionAZ String?
  descriptionRU String?
  descriptionEN String?
  variants      ProductVariant[]
  assets        Asset[]
  prices        Price[]
  orderItems    OrderItem[]      // back-relation к OrderItem.product
  createdAt     DateTime         @default(now())
  updatedAt     DateTime         @updatedAt
}

model ProductVariant {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  sku       String   @unique
  color     String?
  size      String?
  inventory Inventory?
}

model Inventory {
  id         String          @id @default(cuid())
  variantId  String          @unique
  variant    ProductVariant  @relation(fields: [variantId], references: [id])
  quantity   Int             @default(0)
}

model Price {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  currency  String   @default("AZN")
  amount    Decimal  @db.Decimal(10, 2)
}

model Asset {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  url       String
  alt       String?
  position  Int      @default(0)
}

// ===== Промо / маркетинг

model Coupon {
  id        String  @id @default(cuid())
  code      String  @unique
  discount  Int
  isActive  Boolean @default(true)
}

model PromotionRule {
  id        String  @id @default(cuid())
  name      String
  rulesJson String
}

// ===== Заказы / платежи / доставка

model Order {
  id         String      @id @default(cuid())
  customerId String?
  customer   Customer?   @relation(fields: [customerId], references: [id])
  totalAZN   Decimal     @db.Decimal(10, 2)
  status     String      @default("new")
  items      OrderItem[]
  payments   Payment[]
  shipments  Shipment[]  // back-relation к Shipment.order
  createdAt  DateTime    @default(now())
}

model OrderItem {
  id        String   @id @default(cuid
