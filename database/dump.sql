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
    "longDescription" text NOT NULL,
    ages character varying,
    pieces character varying,
    "itemNum" character varying
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
65	32	4	49999
66	32	4	49999
67	32	4	49999
68	33	6	2499
69	34	2	24999
70	35	4	49999
71	36	2	24999
72	36	5	999
73	37	2	24999
74	37	2	24999
75	37	2	24999
76	37	2	24999
77	37	2	24999
78	37	2	24999
79	37	2	24999
80	37	5	999
81	37	2	24999
82	37	2	24999
83	37	2	24999
84	37	2	24999
85	37	2	24999
86	37	2	24999
87	37	6	2499
88	37	1	34999
89	37	2	24999
90	37	6	2499
91	37	4	49999
92	37	3	9999
93	37	2	24999
94	37	6	2499
95	37	2	24999
96	37	2	24999
97	37	2	24999
98	37	2	24999
99	37	2	24999
100	37	6	2499
101	37	6	2499
102	37	6	2499
103	37	5	999
104	37	6	2499
105	37	2	24999
106	37	6	2499
107	37	5	999
108	37	5	999
109	37	6	2499
110	37	2	24999
111	37	1	34999
112	37	4	49999
113	38	4	49999
114	39	4	49999
115	38	4	49999
116	38	4	49999
117	38	4	49999
118	38	4	49999
119	38	4	49999
120	38	4	49999
121	40	1	34999
122	41	3	9999
123	41	3	9999
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
32	2020-05-20 18:33:34.661185+00
33	2020-05-27 18:33:24.687809+00
34	2020-05-27 18:46:30.042916+00
35	2020-05-28 16:00:30.593847+00
36	2020-06-22 22:23:19.500708+00
37	2020-06-24 21:41:39.265136+00
38	2020-06-25 22:32:26.842471+00
39	2020-06-25 22:32:26.842306+00
40	2020-06-27 00:45:30.769616+00
41	2020-06-29 19:45:16.399659+00
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
10	32	1	1	1	2020-05-20 19:03:57.706002+00
11	32	we	ase	123	2020-05-20 19:20:41.809465+00
12	32	fea	adf	asdef	2020-05-20 19:23:10.808681+00
13	32	ae	awse	awe	2020-05-20 19:25:17.6043+00
14	33	asd	asda	asd	2020-05-27 18:41:38.749653+00
15	34	aws	asd	af	2020-05-27 18:55:35.0161+00
16	34	123	1231231231231231	123	2020-05-27 21:27:02.743492+00
17	34	123	1231231231231232	123	2020-05-27 21:33:08.655207+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription", ages, pieces, "itemNum") FROM stdin;
3	Remote Controlled Stunt Racer	9999	/images/Lego-Remote-Controlled-Stunt-Racer.jpeg,/images/Lego-Remote-Controlled-Stunt-Racer1.jpeg,/images/Lego-Remote-Controlled-Stunt-Racer2.jpeg,/images/Lego-Remote-Controlled-Stunt-Racer3.jpeg,/images/Lego-Remote-Controlled-Stunt-Racer4.jpeg,/images/Lego-Remote-Controlled-Stunt-Racer5.jpeg	This 2-in-1 motorized toy rebuilds into a Remote-Controlled Racer.	Pull high-speed wheelies, spins and turns, and traverse rough terrain with this fully motorized LEGO® Technic™ 42095 Remote-Controlled Stunt Racer. This tough model features large ground-gripping tracks with large rear sprockets for optimal acceleration, plus a modern design with a fresh yellow and blue color scheme and decorative stickers. Drive forward, backward, left or right and make 360° turns. Rebuild this 2-in-1 remote-controlled tracked vehicle to create a Remote-Controlled Racer for a double build-and-play experience.	9+	324	42095
6	LEGO Power Functis Servo Motor	2499	/images/LEGO-Power-Functis-Servo-Motor-on88004-Technic.jpeg	Servo Motor features 90-degree rotation clockwise or counterclockwise	Drive your LEGO® Technic creations to a whole new level with the LEGO Power Functions motor made for the ultimate 4-wheel steering experience. Power through the turns like never before with ultra-realistic steering.  Steer your Technic vehicle left, right or straight ahead with any one of 15 steering axle positions. Rotates 90 degrees clockwise or counterclockwise. It’s easy to add 4-wheel steering to your models with the Servo Motor’s front and back power outputs!	7+	1	88004
5	LEGO Power Functions XL Motor	999	/images/LEGO-Power-Functions-XL-Motor-8882.jpeg	Use the "XL" Motor to animate larger builds.	Add an extra XL-Motor to your LEGO® creations! This super-strong motor will give plenty of power to your models, whether it’s spinning a wheel or turning a system of gears.	7+	1	8882
2	4X4 X-treme Off Roader	24999	/images/Lego-4X4-X-treme-Off-Roader.jpeg,/images/Lego-4X4-X-treme-Off-Roader1.jpeg,/images/Lego-4X4-X-treme-Off-Roader2.jpeg,/images/Lego-4X4-X-treme-Off-Roader3.jpeg,/images/Lego-4X4-X-treme-Off-Roader4.jpeg,/images/Lego-4X4-X-treme-Off-Roader5.jpeg	Sturdy app-controlled LEGO® truck with high-rise independent suspension, large wheels and chunky tires.	Are you ready to take your LEGO® play experience to another level? The LEGO Technic™ 4x4 X-treme Off-Roader is powered by an advanced Smart Hub with 3 motors and controlled via the intuitive LEGO TECHNIC CONTROL+ app. The sophisticated app technology enables super-precise movement and functionality, while delivering endless authentic digital play combinations with authentic sound effects. Users can choose from different control screens to drive forward, reverse, steer, accelerate, brake and traverse obstacles. You can also get real-time feedback, such as a speed and tilt log or test out your skills in the app’s challenges and achievement section. This sturdy 4x4 app-controlled truck comes with high-rise independent suspension, large wheels with chunky tires and a fresh color scheme with intricate sticker detailing. Its complex gear mechanisms and technologies introduce LEGO builders to advanced elements of engineering, while improving reaction times, cognitive thinking and creative problem-solving skills.	11+	958	42099
4	Liebherr R-9800 Excavator	49999	/images/Lego-Liebherr-R-9800-Excavator.jpeg,/images/Lego-Liebherr-R-9800-Excavator-1.jpeg,/images/Lego-Liebherr-R-9800-Excavator-2.jpeg,/images/Lego-Liebherr-R-9800-Excavator-3.jpeg,/images/Lego-Liebherr-R-9800-Excavator-4.jpeg,/images/Lego-Liebherr-R-9800-Excavator-5.jpeg	This excavator model features the LEGO® TECHNIC™ CONTROL+ app for a more immersive and realistic play experience and hours of fun.	Get ready for a colossal LEGO® build and play experience with the 4,108-piece LEGO Technic™ Liebherr R 9800 Excavator. Developed in partnership with Liebherr, this replica model is operated via the intuitive LEGO TECHNIC CONTROL+ app and powered by 2 advanced Smart Hubs with 7 motors. The sophisticated app technology enables super-precise movement and amazing functionality, while delivering endless authentic digital play combinations via 4 different control screens with cool graphics. The Multi-function control screen enables users to drive the machine in all directions, rotate the superstructure, extend and raise the boom, open and tilt the bucket, play realistic sound effects and get real-time feedback, such as boom position, power usage and drive distance. With the One-touch screen, users can use drag patterns to control the boom, arm and bucket, while the Custom-built movements screen enables them to choose pre-set commands or record the model’s actions to create complex sequences of movements. And, with the Challenges & achievements screen, users can complete challenges to unlock reward badges.	12+	4108	42100
1	Bugatti-Chiron	34999	/images/Lego-Bugatti-Chiron.jpeg,/images/Lego-Bugatti-Chiron1.jpeg,/images/Lego-Bugatti-Chiron2.jpeg,/images/Lego-Bugatti-Chiron3.jpeg,/images/Lego-Bugatti-Chiron4.jpeg,/images/Lego-Bugatti-Chiron5.jpeg	This LEGO® Technic™ model is designed to provide an immersive and rewarding building experience.	Explore engineering excellence with the LEGO® Technic™ 42083 Bugatti Chiron advanced building set. This exclusive model has been developed in partnership with Bugatti Automobiles S.A.S to capture the essence of the quintessential super sports car, and comes with gleaming aerodynamic bodywork, logoed spoked rims with low-profile tires, and detailed brake discs. The accessible cockpit features a Technic 8-speed gearbox with movable paddle gearshift and a steering wheel bearing the Bugatti emblem. Insert the top speed key and you can switch the active rear wing from handling to top speed position. The rear lid affords a glimpse of the detailed W16 engine with moving pistons, while beneath the hood you/’ll discover a unique serial number and a compact storage compartment containing a stylish Bugatti overnight bag. This 1:8 scale model comes with a classic Bugatti duo-tone blue color scheme that reflects the brand’s signature color, and a set of stickers for additional detailing. The set is delivered in luxurious box packaging and includes a color collector’s booklet with comprehensive building instructions.	16+	3599	42083
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 123, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 41, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 17, true);


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

