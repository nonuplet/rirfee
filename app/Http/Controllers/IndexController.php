<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index() {
        $raw = file_get_contents("https://rirfee.com/blog/wp-json/wp/v2/posts?per_page=6");
        $converted = mb_convert_encoding($raw, 'UTF8', 'UTF-8');
        $posts = json_decode($converted, true);

        $recent = [];

        foreach ($posts as $post) {
            $thumb_raw = file_get_contents($post["_links"]["wp:featuredmedia"][0]["href"]);
            $thumb_data = json_decode($thumb_raw, true);

            $recent[] = [
                "title" => $post["title"]["rendered"],
                "url" => $post["link"],
                "date" => $post["date"],
                "thumbnail" => $thumb_data["guid"]["rendered"]
            ];
        }

        return view("index", ["recent" => $recent]);
    }
}
