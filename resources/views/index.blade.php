@extends('layout/base')

@section('body')
    @php(var_dump($recent))
    <div id="app">
        <index-page />

    </div>
@endsection

