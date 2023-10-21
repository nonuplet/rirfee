@extends('layout/base')

@section('body')
    <div id="app">
        <index-page :recent="@js($recent)" />
    </div>
@endsection

