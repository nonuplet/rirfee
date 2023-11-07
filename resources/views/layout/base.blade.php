<!DOCTYPE html>
<html lang="ja">
<head>
    {{-- base --}}
    @php
        $head_default = [
            "title" => "Rirfee.com",
            "desc" => "ここのえの個人ホームページです。作ったものや開発メモなど上げてます。",
            "ogp_img" => "https://rirfee.com/ogp_img.png"
        ];
    @endphp
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>@yield('title', $head_default["title"])</title>
    <meta name="description" content="@yield('desc', $head_default["desc"])"/>
    <meta name="format-detection" content="telephone=no"/>

    {{-- favicon --}}
    <link rel="icon" href="favicon.ico"/>
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="favicon.png"/>

    {{-- ogp --}}
    <meta property="og:site_name" content="@yield('title', $head_default["title"])"/>
    <meta property="og:url" content="{{url()->full()}}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="@yield('title', $head_default["title"])"/>
    <meta property="og:description" content="@yield('desc', $head_default["desc"])"/>
    <meta property="og:image" content="@yield('desc', $head_default["ogp_img"])"/>
    <meta property="og:locale" content="ja_JP"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description" content="@yield('desc', $head_default["desc"])"/>
    <meta name="twitter:image:src" content="@yield('desc', $head_default["ogp_img"])"/>

    {{-- vite --}}
    @vite(['resources/sass/app.sass', 'resources/ts/app.ts'])

    {{-- fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=M+PLUS+2:wght@400;900&display=swap" rel="stylesheet">
</head>
<body>
    @yield('body')
</body>
</html>
