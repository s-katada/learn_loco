use learn_loco::app::App;
use loco_rs::cli;
use migration::Migrator;

#[shuttle_runtime::tokio::main]
async fn main() -> loco_rs::Result<()> {
    cli::main::<App, Migrator>().await
}
