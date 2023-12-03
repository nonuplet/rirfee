@extends('layout/base')

@section('body')
    <div id="app">
        <index-page :recent="@js($recent)" :news="@js($news)" />
    </div>
@endsection

