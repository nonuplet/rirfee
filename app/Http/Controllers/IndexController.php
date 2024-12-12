<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use function PHPUnit\Framework\isNull;

class IndexController extends Controller
{
    public function index()
    {
        $raw = file_get_contents("https://rirfee.com/blog/wp-json/wp/v2/posts?per_page=6");
        $converted = mb_convert_encoding($raw, 'UTF8', 'UTF-8');
        $posts = json_decode($converted, true);

        $recent = [];

        foreach ($posts as $post) {
            $featured_media = $post["_links"]["wp:featuredmedia"][0]["href"] ?? null;

            $thumb_data = null;

            if ($featured_media) {
                $thumb_raw = file_get_contents($featured_media);
                $thumb_data = json_decode($thumb_raw, true);
            }

            $recent[] = [
                "title" => $post["title"]["rendered"],
                "url" => $post["link"],
                "date" => $post["date"],
                "thumbnail" => $thumb_data["guid"]["rendered"] ?? "img/index/no-image.png"
            ];
        }

        return view("index", [
            "recent" => $recent,
            "news" => json_decode(file_get_contents(public_path("json/news.json"), true))
        ]);
    }
}
