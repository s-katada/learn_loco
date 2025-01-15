#![allow(clippy::missing_errors_doc)]
#![allow(clippy::unnecessary_struct_initialization)]
#![allow(clippy::unused_async)]
#![allow(clippy::missing_panics_doc)]
use axum::{body::Body, debug_handler};
use dotenvy::dotenv;
use loco_rs::prelude::*;
use serde::{Deserialize, Serialize};
use serenity::all::{CreateEmbed, ExecuteWebhook, Http, Webhook};
use std::env;

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct ContactForm {
    name: String,
    email: String,
    content: String,
}

#[debug_handler]
pub async fn index(State(_ctx): State<AppContext>) -> Result<Response> {
    format::empty()
}

#[debug_handler]
pub async fn send_discord(
    State(_ctx): State<AppContext>,
    Json(body): Json<ContactForm>,
) -> Result<Response> {
    dotenv().expect(".env file not found");
    let webhook_url = env::var("WEBHOOK_URL").expect("WEBHOOK_URL not set");
    let http = Http::new("");
    let webhook = Webhook::from_url(&http, &webhook_url)
        .await
        .expect("Failed to create webhook");
    let embed = CreateEmbed::new().description(format!(
        "お名前:\n  {}\n\nメールアドレス:\n  {}\n\nお問い合わせ内容:\n  {}",
        body.name, body.email, body.content
    ));
    let builder = ExecuteWebhook::new()
        .content("お問い合わせが来ましたよ！")
        .embed(embed);
    webhook
        .execute(&http, false, builder)
        .await
        .expect("Could not execute webhook.");
    Ok(Response::new(Body::from("Webhook executed successfully")))
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("api/discords/")
        .add("/", get(index))
        .add("/send", post(send_discord))
}
