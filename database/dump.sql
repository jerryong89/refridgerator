--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

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

ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_pkey;
ALTER TABLE ONLY public.fridges DROP CONSTRAINT fridges_pkey;
ALTER TABLE ONLY public.foods DROP CONSTRAINT foods_pkey;
ALTER TABLE ONLY public.claims DROP CONSTRAINT claims_pkey;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.groups ALTER COLUMN "groupId" DROP DEFAULT;
ALTER TABLE public.fridges ALTER COLUMN "fridgeId" DROP DEFAULT;
ALTER TABLE public.foods ALTER COLUMN "foodId" DROP DEFAULT;
ALTER TABLE public.claims ALTER COLUMN "claimId" DROP DEFAULT;
DROP SEQUENCE public."users_userId_seq";
DROP TABLE public.users;
DROP SEQUENCE public."groups_groupId_seq";
DROP TABLE public.groups;
DROP SEQUENCE public."fridges_fridgeId_seq";
DROP TABLE public.fridges;
DROP SEQUENCE public."foods_foodId_seq";
DROP TABLE public.foods;
DROP SEQUENCE public."claims_claimId_seq";
DROP TABLE public.claims;
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
-- Name: claims; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.claims (
    "claimId" integer NOT NULL,
    "fridgeId" integer NOT NULL,
    "userId" integer NOT NULL,
    "foodId" integer NOT NULL,
    qty integer NOT NULL,
    "expirationDate" date NOT NULL
);


--
-- Name: claims_claimId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."claims_claimId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: claims_claimId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."claims_claimId_seq" OWNED BY public.claims."claimId";


--
-- Name: foods; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.foods (
    "foodId" integer NOT NULL,
    "foodName" text NOT NULL,
    "groupId" integer NOT NULL
);


--
-- Name: foods_foodId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."foods_foodId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: foods_foodId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."foods_foodId_seq" OWNED BY public.foods."foodId";


--
-- Name: fridges; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fridges (
    "fridgeId" integer NOT NULL,
    "fridgeName" text NOT NULL
);


--
-- Name: fridges_fridgeId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."fridges_fridgeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: fridges_fridgeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."fridges_fridgeId_seq" OWNED BY public.fridges."fridgeId";


--
-- Name: groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.groups (
    "groupId" integer NOT NULL,
    "groupName" text NOT NULL
);


--
-- Name: groups_groupId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."groups_groupId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: groups_groupId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."groups_groupId_seq" OWNED BY public.groups."groupId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    "userName" text NOT NULL,
    "fridgeId" integer NOT NULL
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: claims claimId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.claims ALTER COLUMN "claimId" SET DEFAULT nextval('public."claims_claimId_seq"'::regclass);


--
-- Name: foods foodId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.foods ALTER COLUMN "foodId" SET DEFAULT nextval('public."foods_foodId_seq"'::regclass);


--
-- Name: fridges fridgeId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fridges ALTER COLUMN "fridgeId" SET DEFAULT nextval('public."fridges_fridgeId_seq"'::regclass);


--
-- Name: groups groupId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.groups ALTER COLUMN "groupId" SET DEFAULT nextval('public."groups_groupId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Data for Name: claims; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.claims ("claimId", "fridgeId", "userId", "foodId", qty, "expirationDate") FROM stdin;
\.


--
-- Data for Name: foods; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.foods ("foodId", "foodName", "groupId") FROM stdin;
\.


--
-- Data for Name: fridges; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fridges ("fridgeId", "fridgeName") FROM stdin;
\.


--
-- Data for Name: groups; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.groups ("groupId", "groupName") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", "userName", "fridgeId") FROM stdin;
\.


--
-- Name: claims_claimId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."claims_claimId_seq"', 1, false);


--
-- Name: foods_foodId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."foods_foodId_seq"', 1, false);


--
-- Name: fridges_fridgeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."fridges_fridgeId_seq"', 1, false);


--
-- Name: groups_groupId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."groups_groupId_seq"', 1, false);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 1, false);


--
-- Name: claims claims_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.claims
    ADD CONSTRAINT claims_pkey PRIMARY KEY ("claimId");


--
-- Name: foods foods_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.foods
    ADD CONSTRAINT foods_pkey PRIMARY KEY ("foodId");


--
-- Name: fridges fridges_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fridges
    ADD CONSTRAINT fridges_pkey PRIMARY KEY ("fridgeId");


--
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY ("groupId");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

