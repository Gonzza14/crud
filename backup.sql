PGDMP     	                    {            prueba-tecnica-ids    15.4    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    prueba-tecnica-ids    DATABASE     �   CREATE DATABASE "prueba-tecnica-ids" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
 $   DROP DATABASE "prueba-tecnica-ids";
                postgres    false            �            1259    16500    usuario    TABLE     I  CREATE TABLE public.usuario (
    id bigint NOT NULL,
    address character varying(255),
    email character varying(100) NOT NULL,
    lastnames character varying(100),
    names character varying(100),
    password character varying(255) NOT NULL,
    tel character varying(20),
    username character varying(50) NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    16499    usuario_id_seq    SEQUENCE     w   CREATE SEQUENCE public.usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    215                        0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    214            e           2604    16503 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16500    usuario 
   TABLE DATA           `   COPY public.usuario (id, address, email, lastnames, names, password, tel, username) FROM stdin;
    public          postgres    false    215   �                  0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 22, true);
          public          postgres    false    214            g           2606    16509 #   usuario ukl9dcyetnhoa5cbqml6w8p1ujs 
   CONSTRAINT     i   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT ukl9dcyetnhoa5cbqml6w8p1ujs UNIQUE (username, email);
 M   ALTER TABLE ONLY public.usuario DROP CONSTRAINT ukl9dcyetnhoa5cbqml6w8p1ujs;
       public            postgres    false    215    215            i           2606    16507    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    215            �   �   x�=�Mo�@��˯������&��"-T$F�I�K�ݖ�"�����i2��3`�-��5����L�^�����#���B�Y��%'QݲQ}�J�d5�XI��LP3͉��B�4�#���]o���FwN��DO���-�����M;bX`��* �YV�.�^s�0���γE���U~f#Y�S��!
��7����i��)�7�;K��m�Ԥ�>��~EE�d��/�c�QW���Z     