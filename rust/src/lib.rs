mod utils;
use primal::{StreamingSieve};

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn find_nth_prime(num: usize) -> usize {
    let p = StreamingSieve::nth_prime(num);
    p
}
