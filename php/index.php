<?php

header( 'Access-Control-Allow-Origin: *' );  

define( 'ABSPATH', '../' );

require_once( ABSPATH . 'wp-config.php' );
require_once( ABSPATH . 'wp-includes/class-wp-query.php' );

$connection = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD );
mysqli_select_db( $connection, DB_NAME );

$args = array(
  'post_type' => 'post',
  'post_status' => 'publish',
  'posts_per_page' => -1,
  'order' => 'DESC',
  'orderby' => 'date'
);
 
$query = new WP_Query( $args );

$cars = array();
 
while( $query->have_posts() ) : $query->the_post();
 
  $posts[] = array(
    'name' => get_the_title(),
    'html' => get_the_content(),
    'author' => get_the_author(),
    'description' => get_field('description'),
    'client' => get_field('client'),
    'agency' => get_field('agency'),
    'role' => get_field('role'),
    'technologies' => get_field('technologies'),
    'image' => get_field('thumbnail'),
    'image1' => get_field('post_image_1'),
    'image2' => get_field('post_image_2'),
    'image3' => get_field('post_image_3'),
    'image4' => get_field('post_image_4'),
    'image5' => get_field('post_image_5'),
    'image6' => get_field('post_image_6'),
    'image1_caption' => get_field('image_1_caption'),
    'image2_caption' => get_field('image_2_caption'),
    'image3_caption' => get_field('image_3_caption'),
    'image4_caption' => get_field('image_4_caption'),
    'image5_caption' => get_field('image_5_caption'),
    'image6_caption' => get_field('image_6_caption'),
    'cta_url' => get_field('cta_url'),
    'categories' => get_the_category()
  );
 
endwhile;
 
wp_reset_query();
 
echo json_encode( $posts );

?>