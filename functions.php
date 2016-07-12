<?php

function slug_register_commentsNo() {
    register_rest_field( array('post','videos','snippets'),
        'commentsNo',
        array(
            'get_callback'    => 'slug_get_commentsNo',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function slug_get_commentsNo( $object, $field_name, $request ) {
    return get_comments_number($object[ 'id' ]);
}
function slug_register_cateGory() {
    register_rest_field( 'post',
        'cateGory',
        array(
            'get_callback'    => 'slug_get_cateGory',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function slug_get_cateGory( $object, $field_name, $request ) {
    return get_the_category($object['id']);
}
add_action( 'rest_api_init', 'slug_register_commentsNo' );
add_action( 'rest_api_init', 'slug_register_cateGory' );

function get_ssl_avatar($avatar) {
    $avatar = preg_replace('/.*\/avatar\/(.*)\?s=([\d]+)&.*/','<img src="https://secure.gravatar.com/avatar/$1?s=$2" class="avatar avatar-$2">',$avatar);
    return $avatar;
}

add_filter('get_avatar', 'get_ssl_avatar');

?>