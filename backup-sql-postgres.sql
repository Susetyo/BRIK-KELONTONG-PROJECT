--
-- PostgreSQL database dump
--

-- Dumped from database version 12.18
-- Dumped by pg_dump version 12.18

-- Started on 2024-02-25 23:10:25

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

DROP DATABASE IF EXISTS brik_toko_kelontong;
--
-- TOC entry 2854 (class 1262 OID 16393)
-- Name: brik_toko_kelontong; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE brik_toko_kelontong WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Indonesia.1252' LC_CTYPE = 'English_Indonesia.1252';


ALTER DATABASE brik_toko_kelontong OWNER TO postgres;

\connect brik_toko_kelontong

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

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2855 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 206 (class 1259 OID 16461)
-- Name: Categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Categories" (
    id integer NOT NULL,
    "categoryName" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Categories" OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16459)
-- Name: Categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Categories_id_seq" OWNER TO postgres;

--
-- TOC entry 2856 (class 0 OID 0)
-- Dependencies: 205
-- Name: Categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Categories_id_seq" OWNED BY public."Categories".id;


--
-- TOC entry 208 (class 1259 OID 16469)
-- Name: Items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Items" (
    id integer NOT NULL,
    sku character varying(255),
    name character varying(255),
    description character varying(255),
    weight bigint,
    width bigint,
    length bigint,
    height bigint,
    image_url character varying(255),
    price bigint,
    "categoryId" bigint,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Items" OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16467)
-- Name: Items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Items_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Items_id_seq" OWNER TO postgres;

--
-- TOC entry 2857 (class 0 OID 0)
-- Dependencies: 207
-- Name: Items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Items_id_seq" OWNED BY public."Items".id;


--
-- TOC entry 202 (class 1259 OID 16413)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16431)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    "userName" character varying(255),
    password character varying(255),
    "fullName" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16429)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 203
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 2706 (class 2604 OID 16464)
-- Name: Categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories" ALTER COLUMN id SET DEFAULT nextval('public."Categories_id_seq"'::regclass);


--
-- TOC entry 2707 (class 2604 OID 16472)
-- Name: Items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items" ALTER COLUMN id SET DEFAULT nextval('public."Items_id_seq"'::regclass);


--
-- TOC entry 2705 (class 2604 OID 16434)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 2846 (class 0 OID 16461)
-- Dependencies: 206
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Categories" VALUES (1, 'Makanan Utama', '2024-02-25 23:07:19.711+07', '2024-02-25 23:07:19.711+07');
INSERT INTO public."Categories" VALUES (2, 'Minuman', '2024-02-25 23:07:19.711+07', '2024-02-25 23:07:19.711+07');
INSERT INTO public."Categories" VALUES (3, 'Roti', '2024-02-25 23:07:19.711+07', '2024-02-25 23:07:19.711+07');


--
-- TOC entry 2848 (class 0 OID 16469)
-- Dependencies: 208
-- Data for Name: Items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Items" VALUES (407, 'A1', 'x', 'xx', 7, 9, 1, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1335, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (408, 'A2', 'w', 'wwww', 2, 5, 4, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1909, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (409, 'A3', '5', '55555', 9, 7, 9, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1551, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (410, 'A4', '7', '7777777', 2, 7, 7, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1390, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (411, 'A5', 's', 's', 4, 10, 7, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1976, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (412, 'A6', 'F', 'FFF', 10, 6, 3, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1424, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (413, 'A7', '4', '4', 9, 2, 3, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1758, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (414, 'A8', 'C', 'CC', 5, 10, 9, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1732, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (415, 'A9', 'q', 'qq', 7, 2, 3, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1875, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (416, 'A10', 'U', 'UUU', 9, 8, 5, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1496, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (417, 'A11', 'p', 'ppppppppp', 6, 10, 8, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1196, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (418, 'A12', 'A', 'AAAAAAAAAA', 10, 8, 4, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1551, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (419, 'A13', 'p', 'pppppppp', 9, 5, 4, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1290, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (420, 'A14', 'o', 'oooooo', 8, 8, 6, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1351, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (421, 'A15', 'N', 'N', 9, 3, 1, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1600, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (422, 'A16', 'd', 'dddddddddd', 7, 4, 9, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1837, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (423, 'A17', 'G', 'G', 5, 1, 4, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1008, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (424, 'A18', 'z', 'zzzzzzz', 5, 9, 7, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1397, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (425, 'A19', 'i', 'iiii', 7, 8, 5, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1484, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (426, 'A20', 'a', 'a', 10, 4, 6, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1961, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (427, 'A21', 'X', 'XXXX', 6, 6, 6, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1366, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (428, 'A22', 'K', 'KKKKK', 8, 3, 7, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1778, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (429, 'A23', '1', '1111', 4, 7, 6, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1889, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (430, 'A24', 'F', 'FFFFFF', 6, 2, 7, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1789, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (431, 'A25', '7', '7', 2, 1, 1, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1433, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (432, 'A26', 'K', 'KKKKKKKK', 4, 9, 10, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1051, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (433, 'A27', '2', '2222', 8, 4, 3, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1658, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (434, 'A28', 'T', 'TTTTTTTTTT', 7, 1, 8, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1218, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (435, 'A29', '1', '111', 4, 7, 2, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1625, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (436, 'A30', 'V', 'VVVVVV', 6, 6, 10, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1909, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (437, 'A31', 'N', 'NNNNNNNNN', 10, 5, 2, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1585, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (438, 'A32', '0', '0', 6, 9, 8, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1449, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (439, 'A33', 'j', 'jjjjjjjjj', 6, 2, 3, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1212, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (440, 'A34', 'Q', 'QQQQQQQ', 9, 7, 2, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1011, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (441, 'A35', 'p', 'ppppppp', 1, 1, 1, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1181, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (442, 'A36', 'u', 'uuuuuuu', 2, 3, 9, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1817, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (443, 'A37', 'W', 'WW', 8, 3, 8, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1793, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (444, 'A38', 'Q', 'QQQQQ', 3, 9, 5, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1440, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (445, 'A39', 'K', 'KKKKKK', 4, 10, 7, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1536, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (446, 'A40', 'q', 'qqqq', 1, 8, 2, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1471, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (447, 'A41', 'A', 'AAAA', 1, 3, 8, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1047, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (448, 'A42', 'o', 'oo', 5, 4, 10, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1928, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (449, 'A43', '1', '1', 3, 9, 4, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1615, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (450, 'A44', 'Q', 'QQQQQ', 2, 10, 3, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1170, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (451, 'A45', '6', '6666', 1, 7, 8, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1359, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (452, 'A46', '2', '2222222222', 9, 8, 10, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1578, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (453, 'A47', 'N', 'NNNNNNN', 8, 5, 2, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1660, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (454, 'A48', 'i', 'i', 9, 8, 1, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1662, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (455, 'A49', 'L', 'LLLLLLLLL', 1, 3, 2, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1091, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (456, 'A50', 'e', 'e', 8, 5, 10, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1336, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (457, 'A51', 'O', 'OOOOOOOO', 10, 6, 7, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1937, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (458, 'A52', 'T', 'TTTT', 4, 9, 3, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1427, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (459, 'A53', 'h', 'hhhhh', 10, 9, 10, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1490, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (460, 'A54', 'h', 'hhhhhhh', 10, 7, 5, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1650, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (461, 'A55', 'R', 'RRRRRR', 2, 5, 10, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1482, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (462, 'A56', 's', 's', 1, 8, 3, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1313, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (463, 'A57', 'D', 'DDD', 9, 3, 2, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1967, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (464, 'A58', 'S', 'S', 8, 1, 5, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1553, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (465, 'A59', 'E', 'EEEE', 6, 3, 4, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1081, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (466, 'A60', 'w', 'wwwwwwwww', 7, 7, 7, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1061, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (467, 'A61', 'M', 'MMMMMM', 5, 3, 10, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1288, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (468, 'A62', '7', '7', 6, 9, 6, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1849, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (469, 'A63', 'R', 'RRR', 5, 9, 6, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1735, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (470, 'A64', '2', '2222222', 6, 5, 8, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1970, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (471, 'A65', 'u', 'uuuuuuuu', 8, 4, 4, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1690, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (472, 'A66', 'b', 'b', 1, 7, 10, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1787, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (473, 'A67', 'x', 'xxx', 2, 8, 7, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1321, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (474, 'A68', 'P', 'PPPP', 6, 2, 8, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1069, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (475, 'A69', 'H', 'H', 1, 4, 5, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1461, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (476, 'A70', 'I', 'IIIIIIIII', 2, 9, 10, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1032, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (477, 'A71', 'B', 'BBBBBBBBB', 4, 6, 6, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1986, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (478, 'A72', 'Q', 'QQQQ', 4, 4, 1, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1230, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (479, 'A73', 'g', 'gggggg', 9, 3, 1, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1032, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (480, 'A74', 'S', 'SSSSSSS', 10, 8, 2, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1854, 2, '2024-02-25 23:07:19.667+07', '2024-02-25 23:07:19.667+07');
INSERT INTO public."Items" VALUES (481, 'A75', '0', '000000000', 7, 6, 6, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1400, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (482, 'A76', 'N', 'NNNNNNN', 5, 9, 4, 3, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1548, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (483, 'A77', 'o', 'o', 4, 9, 10, 10, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1122, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (484, 'A78', '8', '8888', 8, 9, 1, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1378, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (485, 'A79', 'B', 'BBB', 5, 8, 3, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1403, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (486, 'A80', 'x', 'x', 3, 2, 7, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1388, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (487, 'A81', 'e', 'eeeeeeeee', 5, 4, 10, 6, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1282, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (488, 'A82', '4', '44444', 8, 8, 2, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1888, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (489, 'A83', 'W', 'WWWWWWWWW', 9, 2, 2, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1662, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (490, 'A84', 'O', 'O', 1, 6, 4, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1819, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (491, 'A85', 'f', 'ff', 3, 1, 1, 7, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1837, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (492, 'A86', 'R', 'RRRRRRRRRR', 4, 8, 2, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1755, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (493, 'A87', 'C', 'CCCCCCCCCC', 2, 7, 4, 8, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1663, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (494, 'A88', 'v', 'vv', 8, 10, 5, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1781, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (495, 'A89', 'w', 'wwwwww', 7, 4, 9, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1456, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (496, 'A90', 'I', 'IIIIIII', 5, 5, 7, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1479, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (497, 'A91', 'h', 'hh', 8, 1, 6, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1903, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (498, 'A92', 'K', 'KKKKKKKKKK', 7, 3, 1, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1116, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (499, 'A93', 'g', 'gggggg', 4, 7, 8, 9, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1614, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (500, 'A94', 'a', 'aaa', 4, 3, 9, 4, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1359, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (501, 'A95', 'q', 'qqqq', 3, 5, 2, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1298, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (502, 'A96', '2', '22', 6, 4, 7, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1042, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (503, 'A97', 'H', 'HHHHHHHH', 2, 6, 3, 1, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1050, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (504, 'A98', 'h', 'hhhhhhhhh', 6, 1, 10, 2, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1026, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (505, 'A99', '5', '5555555', 8, 4, 8, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1285, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');
INSERT INTO public."Items" VALUES (506, 'A100', '8', '8888888888', 7, 7, 5, 5, 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b', 1786, 2, '2024-02-25 23:07:19.668+07', '2024-02-25 23:07:19.668+07');


--
-- TOC entry 2842 (class 0 OID 16413)
-- Dependencies: 202
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."SequelizeMeta" VALUES ('20240225102115-create-user.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240225104243-create-item.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240225104352-create-category.js');


--
-- TOC entry 2844 (class 0 OID 16431)
-- Dependencies: 204
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Users" VALUES (8, 'jd', 'jd', 'John Deep', '2024-02-25 23:07:19.705+07', '2024-02-25 23:07:19.705+07');
INSERT INTO public."Users" VALUES (9, 'admin', 'admin', 'Admin', '2024-02-25 23:07:19.705+07', '2024-02-25 23:07:19.705+07');


--
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 205
-- Name: Categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Categories_id_seq"', 8, true);


--
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 207
-- Name: Items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Items_id_seq"', 506, true);


--
-- TOC entry 2861 (class 0 OID 0)
-- Dependencies: 203
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 9, true);


--
-- TOC entry 2713 (class 2606 OID 16466)
-- Name: Categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- TOC entry 2715 (class 2606 OID 16477)
-- Name: Items Items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_pkey" PRIMARY KEY (id);


--
-- TOC entry 2709 (class 2606 OID 16417)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 2711 (class 2606 OID 16439)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


-- Completed on 2024-02-25 23:10:25

--
-- PostgreSQL database dump complete
--

