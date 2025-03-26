import os
from django.conf import settings
import matplotlib.pyplot as plt



def save_plot(plot_img_path):
    # Ensure the media directory exists
    os.makedirs(settings.MEDIA_ROOT, exist_ok=True)
    
    # Construct the full file path to save the plot
    image_path = os.path.join(settings.MEDIA_ROOT, plot_img_path)
    
    # Save the plot image
    plt.savefig(image_path)
    plt.close()  # Close the plot to free up memory
    
    # Construct the URL for the image (relative to MEDIA_URL)
    image_url = settings.MEDIA_URL + plot_img_path

    return image_url