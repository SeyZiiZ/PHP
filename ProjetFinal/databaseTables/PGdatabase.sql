--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2025-01-09 21:57:34

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 17512)
-- Name: contact_form; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact_form (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    is_processed boolean DEFAULT false,
    email character varying(255) NOT NULL
);


ALTER TABLE public.contact_form OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17511)
-- Name: contact_form_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contact_form_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contact_form_id_seq OWNER TO postgres;

--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 219
-- Name: contact_form_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contact_form_id_seq OWNED BY public.contact_form.id;


--
-- TOC entry 218 (class 1259 OID 17489)
-- Name: incidents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidents (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    status boolean DEFAULT false,
    priority character varying(255) NOT NULL,
    code character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    user_id integer NOT NULL
);


ALTER TABLE public.incidents OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17488)
-- Name: incidents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.incidents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.incidents_id_seq OWNER TO postgres;

--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 217
-- Name: incidents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.incidents_id_seq OWNED BY public.incidents.id;


--
-- TOC entry 216 (class 1259 OID 17477)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 17476)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4703 (class 2604 OID 17515)
-- Name: contact_form id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_form ALTER COLUMN id SET DEFAULT nextval('public.contact_form_id_seq'::regclass);


--
-- TOC entry 4700 (class 2604 OID 17492)
-- Name: incidents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents ALTER COLUMN id SET DEFAULT nextval('public.incidents_id_seq'::regclass);


--
-- TOC entry 4698 (class 2604 OID 17480)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4865 (class 0 OID 17512)
-- Dependencies: 220
-- Data for Name: contact_form; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact_form (id, title, description, created_at, is_processed, email) FROM stdin;
2	Demande de renseignements	Bonjour, je voudrais savoir si .....	2025-01-05 14:22:26.732301	f	test@gmail.com
3	Demande de renseignements	Bonjour, je voudrais savoir si .....	2025-01-05 14:24:15.800866	f	test@gmail.com7892342938
4	TEST	TEST	2025-01-05 15:01:43.260104	f	connexionman10@gmail.com
\.


--
-- TOC entry 4863 (class 0 OID 17489)
-- Dependencies: 218
-- Data for Name: incidents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidents (id, title, description, status, priority, code, created_at, user_id) FROM stdin;
\.


--
-- TOC entry 4861 (class 0 OID 17477)
-- Dependencies: 216
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, created_at) FROM stdin;
1	test@example.com	$2y$10$067.jhbChiuslE0C9BZIZuQoK6509S/U..XCPfagXAOuEQutnD59y	2025-01-01 13:31:05.539763
2	connexionman10@gmail.com	$2y$10$dA/a/sBlPOSbK.KA1IXyxO25w3DSSXCSj8AqaIlnfAKk4N16SjmXC	2025-01-01 13:37:22.2796
4	connexionman12@gmail.com	$2y$10$pl8Btkvyayb8rgn0hAMPZ.TuV8spZ9.n9BGzOaQ6ZTFtywBODA1AS	2025-01-01 13:48:30.688559
5	connexionman0@gmail.com	$2y$10$Hf.E17r5O/enr5NB2EYUrODZW3k9ks9QaNP0EiFqyZCtehyo3W4my	2025-01-01 13:52:20.922048
\.


--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 219
-- Name: contact_form_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_form_id_seq', 4, true);


--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 217
-- Name: incidents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.incidents_id_seq', 11, true);


--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- TOC entry 4715 (class 2606 OID 17521)
-- Name: contact_form contact_form_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_form
    ADD CONSTRAINT contact_form_pkey PRIMARY KEY (id);


--
-- TOC entry 4711 (class 2606 OID 17500)
-- Name: incidents incidents_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT incidents_code_key UNIQUE (code);


--
-- TOC entry 4713 (class 2606 OID 17498)
-- Name: incidents incidents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT incidents_pkey PRIMARY KEY (id);


--
-- TOC entry 4707 (class 2606 OID 17487)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4709 (class 2606 OID 17485)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4716 (class 2606 OID 17506)
-- Name: incidents fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


-- Completed on 2025-01-09 21:57:34

--
-- PostgreSQL database dump complete
--

