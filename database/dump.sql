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

ALTER TABLE ONLY public.fridges DROP CONSTRAINT fridges_pkey;
ALTER TABLE public.fridges ALTER COLUMN "fridgeId" DROP DEFAULT;
DROP SEQUENCE public."fridges_fridgeId_seq";
DROP TABLE public.fridges;
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
-- Name: fridges fridgeId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fridges ALTER COLUMN "fridgeId" SET DEFAULT nextval('public."fridges_fridgeId_seq"'::regclass);


--
-- Data for Name: fridges; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fridges ("fridgeId", "fridgeName") FROM stdin;
\.


--
-- Name: fridges_fridgeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."fridges_fridgeId_seq"', 1, false);


--
-- Name: fridges fridges_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fridges
    ADD CONSTRAINT fridges_pkey PRIMARY KEY ("fridgeId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

