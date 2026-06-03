# Tarea S4 — Análisis de selectores de mi test

**Test analizado**: `tests/tarea-s3.spec.ts`

**Sitio**: `playground.calidadsinhumo.com/login`

**Fecha**: 2026-06-03

| # | Selector usado | Tipo | Estabilidad (1 a 5) | Por qué le doy esa nota | Propuesta más estable (si actual < 4) |No aplica|

| 1 | [data-testid="login-email"] |atributo| 5 | Es el más estable porque los atributos data-testid existen únicamente para testing y no cambian con refactors de estilos ni de lógica |No aplica|

| 2 | [data-testid="login-password"] |atributo| 5 | Atributo dedicado exclusivamente a testing, inmune a cambios de estilos, estructura o lógica de negocio|No aplica|

| 3 | [data-testid="login-submit"] |atributo| 5 | Atributo dedicado exclusivamente a testing, inmune a cambios de texto, estilos o restructuras del formulario|No aplica|

| 4 | p.mb-6 |Jerarquia| 1 | Es la combinación más estable disponible, pero sigue siendo una clase Tailwind susceptible a cambios de diseño — este elemento no tiene data-testid, lo que lo hace inherentemente frágil|Le recomendaría a tu equipo de desarrollo agregar un data-testid="login-success-message" a este elemento antes de escribir el test|



