--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
12	20	1	2999
13	20	1	2999
14	20	1	2999
15	20	2	2595
16	20	2	2595
17	20	2	2595
18	20	2	2595
19	20	2	2595
20	20	2	2595
21	20	2	2595
23	21	2	2595
24	21	2	2595
25	22	2	2595
26	22	2	2595
27	23	1	2999
28	23	1	2999
29	23	1	2999
30	23	1	2999
31	23	1	2999
32	23	1	2999
33	23	1	2999
34	23	1	2999
35	24	1	2999
36	24	1	2999
37	24	1	2999
38	24	1	2999
39	24	2	2595
40	24	3	2900
41	24	2	2595
42	25	1	2999
43	25	2	2595
44	25	3	2900
45	25	1	2999
46	25	1	2999
47	25	1	2999
48	25	5	9900
49	26	1	2999
50	26	2	2595
51	27	1	2999
52	27	2	2595
53	28	2	2595
54	28	2	2595
55	27	2	2595
56	27	2	2595
57	29	1	2999
58	30	1	2999
59	30	2	2595
60	30	1	2999
61	30	5	9900
62	30	1	2999
63	30	2	2595
64	31	2	24999
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
20	2020-04-25 02:46:48.632789+00
21	2020-04-25 17:46:10.955732+00
22	2020-04-25 17:48:44.682821+00
23	2020-04-25 18:57:27.805012+00
24	2020-04-25 19:06:01.6107+00
25	2020-04-25 19:14:36.329151+00
26	2020-04-25 21:20:33.536048+00
27	2020-04-25 21:25:58.916746+00
28	2020-04-25 21:55:30.523285+00
29	2020-04-26 16:32:34.482497+00
30	2020-05-18 20:39:20.567111+00
31	2020-05-19 20:45:44.589081+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
2	28	cherie	1234	1234 Abc St	2020-04-25 22:15:35.562236+00
3	28	cherie	1234	1234 Abc St	2020-04-25 22:23:32.91319+00
4	28	cherie	1234	1234 Abc St	2020-04-25 22:24:03.562039+00
5	28	cherie	1234	1234 Abc St	2020-04-25 22:28:14.14234+00
6	27	Cherie	1234	1234	2020-04-26 01:03:56.082385+00
7	27	1234	1234	1234	2020-04-26 01:06:23.964568+00
8	27	Harry	1234 1234 1234 1234	4 Privet Drive, LIttle Whinging	2020-04-26 01:11:50.609808+00
9	29	Harry 	12341234123441234	1234 St.	2020-04-26 16:32:56.079355+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
2	4X4 X-treme Off Roader	24999	/images/Lego-4X4-X-treme-Off-Roader.jpeg	Sturdy app-controlled LEGO® truck with high-rise independent suspension, large wheels and chunky tires.	Are you ready to take your LEGO® play experience to another level? The LEGO Technic™ 4x4 X-treme Off-Roader is powered by an advanced Smart Hub with 3 motors and controlled via the intuitive LEGO TECHNIC CONTROL+ app. The sophisticated app technology enables super-precise movement and functionality, while delivering endless authentic digital play combinations with authentic sound effects. Users can choose from different control screens to drive forward, reverse, steer, accelerate, brake and traverse obstacles. You can also get real-time feedback, such as a speed and tilt log or test out your skills in the app’s challenges and achievement section. This sturdy 4x4 app-controlled truck comes with high-rise independent suspension, large wheels with chunky tires and a fresh color scheme with intricate sticker detailing. Its complex gear mechanisms and technologies introduce LEGO builders to advanced elements of engineering, while improving reaction times, cognitive thinking and creative problem-solving skills.
6	LEGO Power Functis Servo Motor	2499	/images/LEGO-Power-Functis-Servo-Motor-on88004-Technic.jpeg	Servo Motor features 90-degree rotation clockwise or counterclockwise	Drive your LEGO® Technic creations to a whole new level with the LEGO Power Functions motor made for the ultimate 4-wheel steering experience. Power through the turns like never before with ultra-realistic steering.  Steer your Technic vehicle left, right or straight ahead with any one of 15 steering axle positions. Rotates 90 degrees clockwise or counterclockwise. It’s easy to add 4-wheel steering to your models with the Servo Motor’s front and back power outputs!
4	Liebherr R-9800 Excavator	49999	/images/Lego-Liebherr-R-9800-Excavator.jpeg	This excavator model features the LEGO® TECHNIC™ CONTROL+ app for a more immersive and realistic play experience and hours of fun.	Get ready for a colossal LEGO® build and play experience with the 4,108-piece LEGO Technic™ Liebherr R 9800 Excavator. Developed in partnership with Liebherr, this replica model is operated via the intuitive LEGO TECHNIC CONTROL+ app and powered by 2 advanced Smart Hubs with 7 motors. The sophisticated app technology enables super-precise movement and amazing functionality, while delivering endless authentic digital play combinations via 4 different control screens with cool graphics. The Multi-function control screen enables users to drive the machine in all directions, rotate the superstructure, extend and raise the boom, open and tilt the bucket, play realistic sound effects and get real-time feedback, such as boom position, power usage and drive distance. With the One-touch screen, users can use drag patterns to control the boom, arm and bucket, while the Custom-built movements screen enables them to choose pre-set commands or record the model’s actions to create complex sequences of movements. And, with the Challenges & achievements screen, users can complete challenges to unlock reward badges.
5	LEGO Power Functions XL Motor	999	/images/LEGO-Power-Functions-XL-Motor-8882.jpeg	Use the "XL" Motor to animate larger builds.	Add an extra XL-Motor to your LEGO® creations! This super-strong motor will give plenty of power to your models, whether it’s spinning a wheel or turning a system of gears.
3	Remote Controlled Stunt Racer	9999	/images/Lego-Remote-Controlled-Stunt-Racer.jpeg	This 2-in-1 motorized toy rebuilds into a Remote-Controlled Racer.	Pull high-speed wheelies, spins and turns, and traverse rough terrain with this fully motorized LEGO® Technic™ 42095 Remote-Controlled Stunt Racer. This tough model features large ground-gripping tracks with large rear sprockets for optimal acceleration, plus a modern design with a fresh yellow and blue color scheme and decorative stickers. Drive forward, backward, left or right and make 360° turns. Rebuild this 2-in-1 remote-controlled tracked vehicle to create a Remote-Controlled Racer for a double build-and-play experience.
1	Bugatti-Chiron	34999	/images/Lego-Bugatti-Chiron.jpeg	This LEGO® Technic™ model is designed to provide an immersive and rewarding building experience.	Explore engineering excellence with the LEGO® Technic™ 42083 Bugatti Chiron advanced building set. This exclusive model has been developed in partnership with Bugatti Automobiles S.A.S to capture the essence of the quintessential super sports car, and comes with gleaming aerodynamic bodywork, logoed spoked rims with low-profile tires, and detailed brake discs. The accessible cockpit features a Technic 8-speed gearbox with movable paddle gearshift and a steering wheel bearing the Bugatti emblem. Insert the top speed key and you can switch the active rear wing from handling to top speed position. The rear lid affords a glimpse of the detailed W16 engine with moving pistons, while beneath the hood you/’ll discover a unique serial number and a compact storage compartment containing a stylish Bugatti overnight bag. This 1:8 scale model comes with a classic Bugatti duo-tone blue color scheme that reflects the brand’s signature color, and a set of stickers for additional detailing. The set is delivered in luxurious box packaging and includes a color collector’s booklet with comprehensive building instructions.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 64, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 31, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 9, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

