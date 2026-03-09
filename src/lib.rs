use anchor_lang::prelude::*;

declare_id!("Xiaomi1111111111111111111111111111111111");

#[program]
pub mod tienda_xiaomi {
    use super::*;

    pub fn crear_celular(
        ctx: Context<CrearCelular>,
        modelo: String,
        precio: u64,
        almacenamiento: u16,
        color: String,
        stock: u16,
    ) -> Result<()> {
        let celular = &mut ctx.accounts.celular;
        celular.modelo = modelo;
        celular.precio = precio;
        celular.almacenamiento = almacenamiento;
        celular.color = color;
        celular.stock = stock;
        Ok(())
    }

    pub fn actualizar_stock(ctx: Context<ActualizarCelular>, stock: u16) -> Result<()> {
        let celular = &mut ctx.accounts.celular;
        celular.stock = stock;
        Ok(())
    }

    pub fn actualizar_precio(ctx: Context<ActualizarCelular>, precio: u64) -> Result<()> {
        let celular = &mut ctx.accounts.celular;
        celular.precio = precio;
        Ok(())
    }

    pub fn eliminar_celular(_ctx: Context<EliminarCelular>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CrearCelular<'info> {
    #[account(init, payer = user, space = 8 + 200)]
    pub celular: Account<'info, Celular>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ActualizarCelular<'info> {
    #[account(mut)]
    pub celular: Account<'info, Celular>,
}

#[derive(Accounts)]
pub struct EliminarCelular<'info> {
    #[account(mut, close = user)]
    pub celular: Account<'info, Celular>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct Celular {
    pub modelo: String,
    pub precio: u64,
    pub almacenamiento: u16,
    pub color: String,
    pub stock: u16,
}
