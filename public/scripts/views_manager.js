$(() => {

  const $main = $('main');

  window.views_manager = {};

  window.views_manager.show = function(page) {
    $item.detach();
    $items.detach();
    $newItemForm.detach();
    $searchItemForm.detach();
    $messages.detach();
    $favorites.detach();
    $myItem.detach();
    $myItems.detach();

    switch (page) {
      case 'item':
        $item.appendTo($main);
        break;

      case 'items':
        $items.appendTo($main);
        break;

      case 'newItem':
        $newItemForm.appendTo($main);
        break;

      case 'searchItem':
        $searchItemForm.appendTo($main);
        break;

      case 'messages':
        $messages.appendTo($main);
        break;

      case 'favorites':
        $favorites.appendTo($main);
        break;

      case 'myItems':
        $myItems.appendTo($main);
        break;

      case 'myItem':
        $myItem.appendTo($main);
        break;

      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('listings');
        }, 2000);

        break;
      }
    }
  }

});
